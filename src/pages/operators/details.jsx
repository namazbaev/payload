import { PAY } from 'utils/route';
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LinkButton from "components/Buttons/LinkButton";
import {
    DetailsContainer, DetailsCard, DetailsInfo, DetailsKeyboard, Keyboard,
    Number, Delete, MaskedInput, Drop, Hr, InfoText, WarningText, Text, Div, Footer,
    CardImage
} from './style';
import { mobileoperators } from 'utils/json';
export default () => {
    const ref = useRef(null);
    const countryCode = "+998";
    const { name } = useParams();
    const { t } = useTranslation();
    let result = mobileoperators.find(x => x.name === name)
    const [code, setCode] = useState(result?.code);
    const [number, setNumber] = useState(countryCode);
    const onChangeInput = (e) => {
        setCode(e.target.value)
        setNumber(e.target.value)
    }
    const maskConfig = {
        onChange: onChangeInput, mask: `+111 11 111 11 11`,
        value: number, maskChar: null, placeholder: countryCode,
        formatChars: { '1': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }
    }
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
                    <MaskedInput id='input' autoFocus {...maskConfig} />
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