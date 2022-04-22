import React from 'react'
import { LinkTo } from 'styles/globalStyles';
import { useTranslation } from "react-i18next";
import MobileOperators from 'components/Operator';
import { CARD_DETAIL, MOBILEOPERATOR, PROVIDERS, TV } from 'utils/route';
import {
    Container, Company, MainSection, Cards, Services, TVS, Globe,
    CardItem, CardNumber, CardName, ExpiryDate, UzCard, Smartphone,
    Trello, Wallet, Heart, Home, Cast, Fire, Graduation, Medical, Taxi,
    HumoCard, PayText, UzcardLogos, HumoLogoLogos, Service, ServiceName, Hr
} from './style';
export default () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Company>
                <MobileOperators />
            </Company>
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
                    <Service>
                        <Wallet />
                        <ServiceName>{t('electronic_wallet')}</ServiceName>
                    </Service>
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
        </Container>
    )
}