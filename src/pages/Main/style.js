import { device } from "utils/responsive";
import styled, { css } from "styled-components";
import { ReactComponent as TVIcon } from 'assets/icons/tv.svg';
import { ReactComponent as Humo } from 'assets/images/humo.svg';
import { ReactComponent as HumoLogo } from 'assets/icons/humo.svg';
import { ReactComponent as FireIcon } from 'assets/icons/fire.svg';
import { ReactComponent as TaxiIcon } from 'assets/icons/taxi.svg';
import { ReactComponent as CastIcon } from 'assets/icons/cast.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as Uzcard } from 'assets/images/uzcard1.svg';
import { ReactComponent as GlobeIcon } from 'assets/icons/globe.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as UzcardLogo } from 'assets/icons/uzcard.svg';
import { ReactComponent as WalletIcon } from 'assets/icons/wallet.svg';
import { ReactComponent as TrelloIcon } from 'assets/icons/trello.svg';
import { ReactComponent as MedicalIcon } from 'assets/icons/medical.svg';
import { ReactComponent as GraduationIcon } from 'assets/icons/graduation.svg';
import { ReactComponent as SmartphoneIcon } from 'assets/icons/smartphone.svg';
const cardCommon = css`
    color: #fff;
    bottom: 35%;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    position: absolute;
    @media ${device.tablet} {
        font-size: 8px;
        line-height: 12px;
        bottom: 30%;
    }
`
const serviceCommon = css`
    width: 32px;
    height: 32px;
    margin-right: 16px;

    @media ${device.tablet} {
        width: 28px;
        height: 28px;
        margin-right: 10px;
    }
`
export const TV = styled(TVIcon)`${serviceCommon}`
export const Taxi = styled(TaxiIcon)`${serviceCommon}`
export const Medical = styled(MedicalIcon)`${serviceCommon}`
export const Graduation = styled(GraduationIcon)`
    width: auto;
    height: 22px;
    margin-right: 16px;
    @media ${device.tablet} {
        width: 30px;
        height: 16px;
        margin-right: 6px;
    }
`
export const Fire = styled(FireIcon)`${serviceCommon}`
export const Cast = styled(CastIcon)`${serviceCommon}`
export const Home = styled(HomeIcon)`${serviceCommon}`
export const Heart = styled(HeartIcon)`${serviceCommon}`
export const Wallet = styled(WalletIcon)`${serviceCommon}`
export const Trello = styled(TrelloIcon)`${serviceCommon}`
export const Globe = styled(GlobeIcon)`${serviceCommon}`
export const Smartphone = styled(SmartphoneIcon)`${serviceCommon}`
export const UzcardLogos = styled(UzcardLogo)`
    position: absolute;
    top: 15%;
    right: 11%;
    @media ${device.tablet} {
        width: 60px;
        height: 10px;
        right: 8%;
    }
`
export const HumoLogoLogos = styled(HumoLogo)`
    position: absolute;
    top: 15%;
    right: 11%;
    @media ${device.tablet} {
        width: 60px;
        height: 10px;
        right: 5%;
    }
`
export const UzCard = styled(Uzcard)`
    @media ${device.tablet} {
        width: 180px;
        height: auto;
    }
`
export const HumoCard = styled(Humo)`
    @media ${device.tablet} {
        width: 180px;
        height: auto;
    }
`
export const CardNumber = styled.span`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.02em;
    position: absolute;
    bottom: 47%;
    left: 12%;
    color: #fff;

    @media ${device.tablet} {
        font-size: 13px;
        font-weight: 600;
        line-height: 20px;
        bottom: 42%;
    }
`
export const CardName = styled.span`
    ${cardCommon};
    left: 12%;
    text-transform: uppercase;
`
export const ExpiryDate = styled.span`
    ${cardCommon};
    right: 12%;
`
export const PayText = styled.p`
    margin: 0;
    padding-top: 10px;
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    @media ${device.tablet} {
        margin: 10px 0;
        font-size: 14px;
        font-weight: 600;
        line-height: 0;
    }
`
export const Container = styled.div`
    width: 100%;
`
export const Company = styled.div`
    width: 100%;
    display: flex;
    padding: 36px 0;
    justify-content: space-between;
    border-top: 2px solid var(--line-color);
    border-bottom: 2px solid var(--line-color);
    @media ${device.tablet} {
        padding: 14px 0;
        border-top: 1.5px solid var(--line-color);
        border-bottom: 1.5px solid var(--line-color);
    }
`
export const MainSection = styled.div`
    display: flex;
    margin-top: 36px;
    height: 530px;

    @media ${device.tablet} {
        margin-top: 16px;
        height: 320px;
    }
`
export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CardItem = styled.div`
    width: 330px;
    height: 252px;
    padding: 20px;
    display: flex;
    color: #343437;
    margin-bottom: ${({ bottom }) => bottom || 0};
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 8px;
    background-color: #fff;
    filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));

    @media ${device.tablet} {
        width: 200px;
        height: auto;
        padding: 12px;
    }
`
export const Services = styled.div`
    width: 75%;
    height: 105%;
    padding-left: 34px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${device.tablet} {
        justify-content: space-around;
    }
`
export const Service = styled.div`
    width: 256px;
    height: 112px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 40px;
    box-shadow: 0px 4px 20px rgba(34, 37, 48, 0.09);

    @media ${device.tablet} {
        width: 160px;
        height: 70px;
        padding: 20px;
    }
`
export const ServiceName = styled.p`
    margin: 0;
    color: #343437;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;

    @media ${device.tablet} {
        font-size: 14px;
        font-weight: 400;
        line-height: 15px;
    }
`