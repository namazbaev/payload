import { CARDPAY } from 'routes/route';
import { useState, useMemo } from 'react';
import { cardMask } from 'utils/functions';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Formatting } from 'styles/globalStyles';
import { cards, numberKeyboard } from 'utils/json';
import LinkButton from "components/Buttons/LinkButton";
import {
    DetailsContainer, DetailsCard, DetailsInfo, DetailsKeyboard, Keyboard,
    Number, Delete, Drop, Hr, InfoText, WarningText, Text, Div, Footer,
    CardImage
} from './style';
export default () => {
    const { name } = useParams();
    const { t } = useTranslation();
    let result = cards.find(x => x.name === name)
    const [number, setNumber] = useState('');
    const onChangeNumber = value => {
        if (number.length >= 16) return
        setNumber((prev) => prev + value)
    }
    const removeChar = () => {
        if (number == '') return
        const value = number.slice(0, -1)
        setNumber(value)
    }
    const length = number.length !== 16;
    const clearNumbers = () => setNumber('');
    const fromCard = number.split(' ').join('');
    const cardNumber = useMemo(() => cardMask(number), [number])
    return (
        <Div>
            <DetailsContainer>
                <DetailsInfo>
                    <DetailsCard>
                        <CardImage img={result?.img} />
                    </DetailsCard>
                    <Formatting>{cardNumber}</Formatting>
                    <Hr />
                    <InfoText>
                        <Text>
                            <WarningText> {t('warning')}
                            </WarningText> {t('card_pay_warning')}
                        </Text>
                    </InfoText>
                </DetailsInfo>
                <Drop />
                <DetailsKeyboard>
                    {numberKeyboard.map(({ key }) => (
                        <Keyboard key={key} onClick={() => onChangeNumber(key)}>
                            <Number>{key}</Number>
                        </Keyboard>
                    ))}
                    <Keyboard onClick={() => clearNumbers()}>
                        <Number>C</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(0)}>
                        <Number>0</Number>
                    </Keyboard>
                    <Keyboard onClick={removeChar}>
                        <Delete />
                    </Keyboard>
                </DetailsKeyboard>
            </DetailsContainer>
            <Footer>
                <LinkButton path={-1} text={t('back')} />
                <LinkButton path="/" text={t('main_page')} />
                <LinkButton length={length}
                    state={fromCard} text={t('next')}
                    color={length ? '#aeaeae' : '#00C35A'} hoveredColor={length ? '#aeaeae' : "#04B054"} path={CARDPAY} />
            </Footer>
        </Div>
    )
}