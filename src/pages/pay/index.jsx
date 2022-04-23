import Popup from 'components/Popup';
import { useLocation } from 'react-router-dom';
import { currencyMask } from 'utils/functions';
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from 'react';
import LinkButton from "components/Buttons/LinkButton";
import {
    Container, ImageWrap, Image, Input, InfoText, DangerText, Text, Hr,
    DataInfo, DataInfoItem, Label, Phone, Amount, Footer, Div
} from './style';
import { FooterBtn } from 'pages/card/pay/style';
export default () => {
    const inputRef = useRef();
    const location = useLocation();
    const { t } = useTranslation();
    const lang = localStorage.getItem('lang');
    const [amount, setAmount] = useState('');
    const [active, setActive] = useState(false);
    const onChangeInput = (e) => setAmount(e.target.value);
    const removeChar = () => {
        if (amount == '') return
        const sliceNumber = lang === 'uz' ? -6 : -5
        const value = amount.slice(0, sliceNumber)
        setAmount(value)
    }
    const maskConfig = {
        placeholder: `1 000 ${t('currency')}`, onKeyDown: removeChar, value: amount,
        maxLength: 11, onChange: (e) => onChangeInput(currencyMask(e, t('currency')))
    }
    useEffect(() => inputRef.current.focus(), [])
    const length = amount == ''
    const status = Math.random() < 0.5;
    const total = amount !== '' ? amount : 0;
    const phone = location.state !== null ? location.state : '';
    return (
        <>
            <Popup active={active} setActive={setActive} status={status} />
            <Div isShow={active}>
                <Container>
                    <ImageWrap>
                        <Image />
                    </ImageWrap>
                    <Input ref={inputRef} {...maskConfig} />
                    <InfoText>
                        <Text>
                            <DangerText>{t('warning')}</DangerText> {t('standing')}
                        </Text>
                    </InfoText>
                    <Hr />
                    <DataInfo>
                        <DataInfoItem>
                            <Label>{t('phone')}</Label>
                            <Phone value={phone} displayType='text' format="+### ## ### ## ##" />
                        </DataInfoItem>
                        <DataInfoItem>
                            <Label>{t('payment_amount')}</Label>
                            <Amount value={total} suffix={` ${t('currency')}`} displayType='text' thousandSeparator={true} />
                        </DataInfoItem>
                    </DataInfo>
                </Container>
                <Footer>
                    <LinkButton path={-1} text={t('back')} />
                    <LinkButton path="/" text={t('main_page')} />
                    <FooterBtn color={length ? '#D8D8D8' : '#00C35A'}
                        hoveredColor={length ? '#D8D8D8' : "#04B054"} disabled={length}
                        onClick={() => setActive(true)}>
                        {t('pay')}
                    </FooterBtn>
                    {/* <LinkButton disabled={amount == ''} text={t('pay')}
                    color='#00C35A' hoveredColor="#04B054" path={null} /> */}
                </Footer>
            </Div>
        </>
    )
}