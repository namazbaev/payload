import { useState } from 'react';
import { CARD_PAY } from 'utils/route';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LinkButton from "components/Buttons/LinkButton";
import {
    DetailsContainer, DetailsCard, DetailsInfo, DetailsKeyboard, Keyboard,
    Number, Delete, MaskedInput, Drop, Hr, InfoText, WarningText, Text, Div, Footer,
    CardImage
} from './style';
import { cards } from 'utils/json';
export default () => {
    const { name } = useParams();
    const { t } = useTranslation();
    let result = cards.find(x => x.name === name)
    const [number, setNumber] = useState('');
    // const [code, setCode] = useState(result?.code);
    const onChangeInput = (e) => {
        // setCode(e.target.value)
        setNumber(e.target.value)
    }
    const maskConfig = {
        value: number, maskChar: null,
        onChange: onChangeInput, mask: `1111 1111 1111 1111`,
        formatChars: { '1': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }
    }
    const onChangeNumber = (value) => {
        if (number.length >= 16) return
        setNumber(number + String(value))
    }
    const removeChar = () => {
        if (number == '') return
        const value = number.slice(0, -1)
        setNumber(value)
    }
    const removeNumbers = () => setNumber('');
    const fromCard = number.split(' ').join('');
    return (
        <Div>
            <DetailsContainer>
                <DetailsInfo>
                    <DetailsCard>
                        <CardImage img={result?.img} />
                    </DetailsCard>
                    <MaskedInput autoFocus  {...maskConfig} />
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
                    <Keyboard onClick={() => onChangeNumber(1)}>
                        <Number>1</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(2)}>
                        <Number>2</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(3)}>
                        <Number>3</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(4)}>
                        <Number>4</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(5)}>
                        <Number>5</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(6)}>
                        <Number>6</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(7)}>
                        <Number>7</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(8)}>
                        <Number>8</Number>
                    </Keyboard>
                    <Keyboard onClick={() => onChangeNumber(9)}>
                        <Number>9</Number>
                    </Keyboard>
                    <Keyboard onClick={() => removeNumbers()}>
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
                <LinkButton disabled={number.length <= 16}
                    state={fromCard} text={t('next')}
                    color='#00C35A' hoveredColor="#04B054" path={CARD_PAY} />
            </Footer>
        </Div>
    )
}