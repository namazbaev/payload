import { useState } from 'react';
import Popup from 'components/Popup';
import Keyboard from 'components/Keyboard';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LinkButton from "components/Buttons/LinkButton";
import { Phone, Amount, Format } from 'styles/globalStyles';
import { FooterBtn, Formatting } from 'pages/card/pay/style';
import {
    DataInfo, DataInfoItem, Label, Footer, Div,
    Container, ImageWrap, Image, InfoText, DangerText, Text, Hr,
} from './style';
export default () => {
    const location = useLocation();
    const { t } = useTranslation();
    const [amount, setAmount] = useState('');
    const [active, setActive] = useState(false);
    const removeChar = () => {
        if (amount == '') return
        const value = amount.slice(0, -1)
        setAmount(value)
    }
    const length = amount == ''
    const status = Math.random() < 0.5;
    const total = amount !== '' ? amount : 0;
    const phone = location.state !== null ? location.state : '';
    const summa = amount.length > 0 ? amount : 0
    return (
        <>
            <Popup active={active ? active : ''} setActive={setActive} status={status} />
            <Div isShow={active}>
                <Container>
                    <ImageWrap>
                        <Image />
                    </ImageWrap>
                    <Formatting><Format value={summa} displayType='text' thousandSeparator={true} />{' '}{t('currency')}</Formatting>
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
                </Footer>
                <Keyboard setKey={setAmount} removeChar={removeChar} />
            </Div>
        </>
    )
}