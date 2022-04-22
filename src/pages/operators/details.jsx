import { useState } from 'react';
import { PAY } from 'utils/route';
import { useTranslation } from "react-i18next";
import LinkButton from "components/Buttons/LinkButton";
import { useParams, useLocation } from 'react-router-dom';
import {
    DetailsContainer, DetailsCard, DetailsInfo, DetailsKeyboard, Keyboard,
    Number, Delete, MaskedInput, Drop, Hr, InfoText, WarningText, Text, Div, Footer,
    CardImage
} from './style';
import { mobileoperators } from 'utils/json';
export default () => {
    const { name } = useParams();
    const location = useLocation();
    const { t } = useTranslation();
    let result = mobileoperators.find(x => x.name === name)
    const [number, setNumber] = useState('');
    const [code, setCode] = useState(result?.code);
    const onChangeInput = (e) => {
        setCode(e.target.value)
        setNumber(e.target.value)
    }
    const maskConfig = {
        value: number, maskChar: null,
        maxLength: 17, placeholder: "+998",
        onChange: onChangeInput, mask: `+998 11 111 11 11`,
        formatChars: { '1': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }
    }
    const onChangeNumber = (value) => {
        if (number.length > 8) return
        setNumber(number + String(value))
    }
    const removeChar = () => {
        if (number == '') return
        const value = number.slice(0, -1)
        setNumber(value)
    }
    const removeNumbers = () => setNumber('');
    const fromPhone = number.split(' ').join('');
    return (
        <Div>
            <DetailsContainer>
                <DetailsInfo>
                    <DetailsCard>
                        <CardImage img={result.img} />
                    </DetailsCard>
                    <MaskedInput  {...maskConfig} />
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
                <LinkButton disabled={number.length < 17}
                    state={fromPhone} text={t('next')}
                    color='#00C35A' hoveredColor="#04B054" path={PAY} />
            </Footer>
        </Div>
    )
}