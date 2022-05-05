import { useState } from 'react';
import Keyboard from 'components/Keyboard';
import { useTranslation } from "react-i18next";
import { Phone, Amount, Summa } from 'styles/globalStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    DataInfo, DataInfoItem, Label, Footer, Div,
    Container, ImageWrap, Image, Hr, FIO, FooterBtn, Formatting,
} from './style';
import Popup from 'components/Popup';
export default () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const [amount, setAmount] = useState('');
    const [active, setActive] = useState(false);
    const removeChar = () => {
        if (amount == '') return
        const value = amount.slice(0, -1)
        setAmount(value)
    }
    const status = Math.random() < 0.5;
    const total = amount !== '' ? amount : 0
    const phone = location.state !== null ? location.state : ''
    const goBack = () => {
        navigate(-1);
        setActive(!active);
    }
    const length = amount == '';
    const summa = amount.length > 0 ? amount : 0
    return (
        <>
            <Popup active={active} setActive={setActive} status={status} />
            <Div isShow={active}>
                <Container>
                    <ImageWrap>
                        <Image />
                    </ImageWrap>
                    <Formatting><Summa value={summa} displayType='text' thousandSeparator={true} />{' '}{t('currency')}</Formatting>
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
                <Keyboard setKey={setAmount} removeChar={removeChar} />
            </Div>
        </>
    )
}