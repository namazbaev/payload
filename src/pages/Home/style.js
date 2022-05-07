import { Link } from 'react-router-dom';
import { device } from "utils/media/responsive";
import styled, { css } from "styled-components";
import { ReactComponent as TVIcon } from 'assets/icons/tv.svg';
import { ReactComponent as Humo } from 'assets/images/cards/humo.svg';
import { ReactComponent as HumoLogo } from 'assets/icons/humo.svg';
import { ReactComponent as FireIcon } from 'assets/icons/fire.svg';
import { ReactComponent as TaxiIcon } from 'assets/icons/taxi.svg';
import { ReactComponent as CastIcon } from 'assets/icons/cast.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as Uzcard } from 'assets/images/cards/uzcard1.svg';
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
        width: 26px;
        height: 26px;
        margin-right: 10px;
    }
`
export const TVS = styled(TVIcon)`${serviceCommon}`
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
export const Hr = styled.hr`
    border: 0;
    margin: 40px 48px;
    border-top: 2px solid var(--line-color);
    @media ${device.tablet} {
        margin: 20px 30px;
    }
`
export const MainSection = styled.div`
    display: flex;
    margin-top: 36px;
    height: 530px;
    padding: 0 48px;
    @media ${device.tablet} {
        padding: 0 24px;
        margin-top: 16px;
        height: 100%;
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
    cursor: pointer;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    color: var(--card-text-color);
    border-radius: 8px;
    background-color: #fff;
    transition: var(--card-transition);
    margin-bottom: ${({ bottom }) => bottom || 0};
    filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));
    &:hover  {
        box-shadow: var(--card-hover-shadow);
    }
    &:focus, &:active {
        p {
            font-size: 21.9px;
        }
        color: #000;
        transition: var(--card-click-transition);
        box-shadow: 0px 4px 20px rgba(34, 37, 48, 0.10);
    }
    @media ${device.tablet} {
        width: 200px;
        height: auto;
        padding: 12px;
        &:focus, &:active {
        p {
            font-size: 13.9px;
        }
        color: #000;
        transition: var(--card-click-transition);
        box-shadow: 0px 4px 20px rgba(34, 37, 48, 0.10);
    }
    }
`
export const Services = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-left: 34px;
    display: grid;
    align-content: space-between;
    justify-content: space-between;
    grid-template-columns: auto auto auto;
    @media ${device.tablet} {
        padding-left: 16px;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
    }
`
export const Service = styled.div`
    width: 256px;
    height: 112px;
    padding-left: 42px;
    padding-right: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #FFFFFF;
    border-radius: 8px;
    cursor: pointer;
    transition: var(--card-transition);
    box-shadow: 0px 4px 20px rgba(34, 37, 48, 0.09);
    &:hover  {
        box-shadow: var(--card-hover-shadow);
    }
    &:focus, &:active {
        p {
            font-size: 17.9px;
        }
        svg {
            width: 31px;
            height: 31px;
        }
        color: #000;
        transition: var(--card-click-transition);
        box-shadow: 0px 4px 20px rgba(34, 37, 48, 0.10);
    }
    @media ${device.tablet1} {
        width: 220px;
        padding: 20px;
        &:focus, &:active {
        p {
            font-size: 17.8px;
        }
        svg {
            width: 27px;
            height: 27px;
        }
        color: #000;
        transition: var(--card-click-transition);
        box-shadow: 0px 4px 20px rgba(34, 37, 48, 0.10);
    }
    }
    @media ${device.tablet} {
        width: 160px;
        height: 70px;
        padding: 20px;
        &:focus, &:active {
        p {
            font-size: 13.9px;
        }
        svg {
            width: 27px;
            height: 27px;
        }
        color: #000;
        transition: var(--card-click-transition);
        box-shadow: 0px 4px 20px rgba(34, 37, 48, 0.10);
    }
    }
`
export const ServiceName = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: var(--card-text-color);
    @media ${device.tablet} {
        font-size: 14px;
        font-weight: 400;
        line-height: 15px;
    }
`
export const LinkTo = styled(Link)`
    text-decoration: none;
`