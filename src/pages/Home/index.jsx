import { useState, useEffect } from 'react';
import Keyboard from 'components/Keyboard';
import "react-multi-carousel/lib/styles.css";
import { LinkTo } from 'styles/globalStyles';
import { useTranslation } from "react-i18next";
import MobileOperators from 'components/Operator';
import { searchAction } from 'redux/slices/search';
import { useSelector, useDispatch } from 'react-redux';
import { WALLET, CARD_DETAIL, MOBILEOPERATOR, PROVIDERS, TV } from 'routes/route';
import {
    Container, MainSection, Cards, Services, TVS, Globe,
    CardItem, CardNumber, CardName, ExpiryDate, UzCard, Smartphone,
    Trello, Wallet, Heart, Home, Cast, Fire, Graduation, Medical, Taxi,
    HumoCard, PayText, UzcardLogos, HumoLogoLogos, Service, ServiceName, Hr, KeyboardWrap
} from './style';
export default () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [key, setKey] = useState('');
    const { writeText, removeText } = searchAction;
    const isShow = useSelector(state => state.search.isShowKeyboard);
    useEffect(() => {
        dispatch(writeText(key))
    }, [key])
    const removeChar = () => dispatch(removeText())
    return (
        <Container>
            <MobileOperators />
            <Hr />
            <MainSection>
                <Cards>
                    <LinkTo to={`${CARD_DETAIL}/uzcard`}>
                        <CardItem>
                            <UzCard />
                            <UzcardLogos />
                            <CardNumber>8600 **** **** ****</CardNumber>
                            <CardName>shaxzod namazbaev</CardName>
                            <ExpiryDate>12/23</ExpiryDate>
                            <PayText>{t('replenishment_uzcard')}</PayText>
                        </CardItem>
                    </LinkTo>
                    <LinkTo to={`${CARD_DETAIL}/humo`}>
                        <CardItem>
                            <HumoCard />
                            <HumoLogoLogos />
                            <CardNumber>9860 **** **** ****</CardNumber>
                            <CardName>shaxzod namazbaev</CardName>
                            <ExpiryDate>01/25</ExpiryDate>
                            <PayText>{t('replenishment_humo')}</PayText>
                        </CardItem>
                    </LinkTo>
                </Cards>
                <Services>
                    <LinkTo to={MOBILEOPERATOR}>
                        <Service>
                            <Smartphone />
                            <ServiceName>{t('mobile_operators')}</ServiceName>
                        </Service>
                    </LinkTo>
                    <LinkTo to={TV}>
                        <Service>
                            <TVS />
                            <ServiceName>{t('online_tv')}</ServiceName>
                        </Service>
                    </LinkTo>
                    <LinkTo to={PROVIDERS}>
                        <Service>
                            <Globe />
                            <ServiceName>{t('internet_providers')}</ServiceName>
                        </Service>
                    </LinkTo>
                    <Service>
                        <Trello />
                        <ServiceName>{t('advertisement')}</ServiceName>
                    </Service>
                    <LinkTo to={WALLET}>
                        <Service>
                            <Wallet />
                            <ServiceName>{t('electronic_wallet')}</ServiceName>
                        </Service>
                    </LinkTo>
                    <Service>
                        <Heart />
                        <ServiceName>{t('charity')}</ServiceName>
                    </Service>
                    <Service>
                        <Home />
                        <ServiceName>{t('bank_loans')}</ServiceName>
                    </Service>
                    <Service>
                        <Cast />
                        <ServiceName>{t('online_services')}</ServiceName>
                    </Service>
                    <Service>
                        <Fire />
                        <ServiceName>{t('utilies_payment')}</ServiceName>
                    </Service>
                    <Service>
                        <Graduation />
                        <ServiceName>{t('education')}</ServiceName>
                    </Service>
                    <Service>
                        <Medical />
                        <ServiceName>{t('medicine')}</ServiceName>
                    </Service>
                    <Service>
                        <Taxi />
                        <ServiceName>{t('taxi')}</ServiceName>
                    </Service>
                </Services>
            </MainSection>
            <KeyboardWrap show={isShow}><Keyboard setKey={setKey} removeChar={removeChar} /></KeyboardWrap>
        </Container>
    )
}