import React from 'react'
import Operators from 'components/Operators';
import { useTranslation } from "react-i18next";
import {
    Container, Company, MainSection, Cards, Services, TV, Globe,
    CardItem, CardNumber, CardName, ExpiryDate, UzCard, Smartphone,
    Trello, Wallet, Heart, Home, Cast, Fire, Graduation, Medical, Taxi,
    HumoCard, PayText, UzcardLogos, HumoLogoLogos, Service, ServiceName, Hr, LinkTo
} from './style';
const Main = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Company>
                <Operators />
            </Company>
            <Hr />
            <MainSection>
                <Cards>
                    <CardItem>
                        <UzCard />
                        <UzcardLogos />
                        <CardNumber>8600 **** **** ****</CardNumber>
                        <CardName>shaxzod namazbaev</CardName>
                        <ExpiryDate>12/23</ExpiryDate>
                        <PayText>{t('replenishment_uzcard')}</PayText>
                    </CardItem>
                    <CardItem>
                        <HumoCard />
                        <HumoLogoLogos />
                        <CardNumber>9860 **** **** ****</CardNumber>
                        <CardName>shaxzod namazbaev</CardName>
                        <ExpiryDate>01/25</ExpiryDate>
                        <PayText>{t('replenishment_humo')}</PayText>
                    </CardItem>
                </Cards>
                <Services>
                    <Service>
                        <Smartphone />
                        <ServiceName>{t('mobile_operators')}</ServiceName>
                    </Service>
                    <Service>
                        <TV />
                        <ServiceName>{t('online_tv')}</ServiceName>
                    </Service>
                    <LinkTo to='/providers'>
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

export default Main