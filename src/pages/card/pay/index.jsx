import { useState } from 'react';
import { sumMask } from 'utils/functions';
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Container, ImageWrap, Image, Hr, FIO, FooterBtn, Formatting,
    DataInfo, DataInfoItem, Label, Phone, Amount, Footer, Div,
} from './style';
import Popup from 'components/Popup';
export default () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const [amount, setAmount] = useState('212852');
    // const lang = localStorage.getItem('lang');
    const [active, setActive] = useState(false);
    // const removeChar = () => {
    //     if (amount == '') return
    //     const sliceNumber = lang === 'uz' ? -6 : -5
    //     const value = amount.slice(0, sliceNumber)
    //     setAmount(value)
    // }
    const status = Math.random() < 0.5;
    const total = amount !== '' ? amount : 0
    const phone = location.state !== null ? location.state : ''
    const goBack = () => {
        navigate(-1);
        setActive(!active);
    }
    const length = amount == '';
    const summa = sumMask(amount, t('currency'));
    return (
        <>
            <Popup active={active} setActive={setActive} status={status} />
            <Div isShow={active}>
                <Container>
                    <ImageWrap>
                        <Image />
                    </ImageWrap>
                    <Formatting>{summa}</Formatting>
                    <Hr />
                    <DataInfo>
                        <DataInfoItem>
                            <Label>{t('card_number')}</Label>
                            <Phone value={phone} displayType='text' format="#### #### #### ####" />
                        </DataInfoItem>
                        <DataInfoItem>
                            <Label>{t('card_holder_name')}</Label>
                            <FIO>Ismoil Erkinov</FIO>
                        </DataInfoItem>
                        <DataInfoItem>
                            <Label>{t('transfer_amount')}</Label>
                            <Amount value={total} suffix={` ${t('currency')}`} displayType='text' thousandSeparator={true} />
                        </DataInfoItem>
                    </DataInfo>
                </Container>
                <Footer>
                    <FooterBtn onClick={goBack}>
                        {t('back')}
                    </FooterBtn>
                    <FooterBtn onClick={() => navigate('/')}>
                        {t('main_page')}
                    </FooterBtn>
                    <FooterBtn color={length ? '#D8D8D8' : '#00C35A'}
                        hoveredColor={length ? '#D8D8D8' : "#04B054"} disabled={amount == ''}
                        onClick={() => setActive(true)}>
                        {t('pay')}
                    </FooterBtn>
                </Footer>
            </Div>
        </>
    )
}