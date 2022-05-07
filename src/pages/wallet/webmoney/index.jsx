import { useState, useMemo } from 'react';
import Keyboard from 'components/Keyboard';
import { useTranslation } from "react-i18next";
import { FooterBtn } from 'pages/card/pay/style';
import LinkButton from 'components/Buttons/LinkButton';
import { Formatting, Format } from 'styles/globalStyles';
import WebMoney from 'assets/images/wallets/webmoney1.svg';
import { Container, LogoWrap, Logo, InputWrap, Footer } from "./style";
export default () => {
    const { t } = useTranslation();
    const countryCode = '+998';
    const [code, setCode] = useState('');
    const [phone, setPhone] = useState(countryCode);
    const length = phone.length <= 12
    const removeChar = () => {
        if (phone.length > 4) {
            if (phone.length === 4) return
            const value = phone.slice(0, -1)
            setPhone(value)
        } else {
            if (code == '') return
            const value = code.slice(0, -1)
            setCode(value)
        }
    }
    const key = useMemo(() => {
        if (code.length >= 10) {
            if (phone.length >= 13) {
                return
            }
            return setPhone
        } else {
            return setCode
        }
    }, [code, phone])
    return (
        <Container>
            <LogoWrap>
                <Logo src={WebMoney} alt="logo" />
            </LogoWrap>
            <InputWrap>
                <Formatting width="47%">
                    {code.length > 0 ? <Format renderText={() => code.length ? <div>Y {code}</div> : ''} prefix="Y" value={code} displayType="text" /> : 'Y'}
                </Formatting>
                <Formatting width="47%">
                    {phone.length >= 4 ? <Format value={phone} displayType="text" format="+### ## ### ## ##" /> : 'Telefon raqam'}
                </Formatting>
            </InputWrap>
            <Footer>
                <LinkButton path={-1} text={t('back')} />
                <LinkButton path="/" text={t('main_page')} />
                <FooterBtn color={length ? '#D8D8D8' : '#00C35A'}
                    hoveredColor={length ? '#D8D8D8' : "#04B054"} disabled={length}>
                    {t('next')}
                </FooterBtn>
            </Footer>
            <Keyboard setKey={key || setPhone} removeChar={removeChar} padding="0px" />
        </Container>
    )
}