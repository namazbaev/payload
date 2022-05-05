import { useState } from 'react';
import { PAY } from 'utils/route';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LinkButton from "components/Buttons/LinkButton";
import {
    DetailsContainer, DetailsCard, DetailsInfo, DetailsKeyboard, Keyboard,
    Number, Delete, Drop, Hr, InfoText, WarningText, Text, Div, Footer,
    CardImage
} from './style';
import { mobileoperators } from 'utils/json';
import { Formatting } from 'pages/card/pay/style';
import { Format } from 'styles/globalStyles';
export default () => {
    const countryCode = "+998";
    const { name } = useParams();
    const { t } = useTranslation();
    let result = mobileoperators.find(x => x.name === name)
    const [number, setNumber] = useState(countryCode);
    const onChangeNumber = (value) => {
        if (number.length >= 13) return
        setNumber(number + String(value))
    }
    const removeChar = () => {
        if (number == '') return
        if (number.length !== 4) {
            const value = number.slice(0, -1)
            setNumber(value)
        }
    }
    const length = number.length !== 13;
    const fromPhone = number.split(' ').join('');
    const removeNumbers = () => setNumber(countryCode);
    return (
        <Div>
            <DetailsContainer>
                <DetailsInfo>
                    <DetailsCard>
                        <CardImage img={result.img} />
                    </DetailsCard>
                    <Formatting><Format value={number} displayType="text" format="+### ## ### ## ##" /></Formatting>
                    <Hr />
                    <InfoText>
                        <Text>
                            <WarningText> {t('warning')}
                            </WarningText> {t('block_pay')}
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
                <LinkButton length={length} state={fromPhone} text={t('next')}
                    color={length ? '#D8D8D8' : '#00C35A'} hoveredColor={length ? '#D8D8D8' : "#04B054"} path={PAY} />
            </Footer>
        </Div>
    )
}