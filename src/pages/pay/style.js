import { device } from "utils/responsive";
import Currency from 'react-currency-format';
import styled, { css } from "styled-components";
import PayImg from 'assets/images/cards/payinfo.svg';

const infoCommon = css`
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    @media ${device.tablet} {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
    }
`
export const Div = styled.div`
    height: 80vh;
    display: ${({ isShow }) => isShow ? "none" : "flex"} ;
    flex-direction: column;
    justify-content: space-between;
`
export const Container = styled.div`
    width: 550px;
    margin: 0 auto;
    margin-top: 40px;
    @media ${device.tablet} {
        width: 400px;
        margin-top: 25px;
    }
`
export const ImageWrap = styled.div`
    width: 256px;
    height: 256px;
    margin: 0 auto;
    @media ${device.tablet} {
        width: 160px;
        height: 160px;
    }
`
export const Image = styled.span`
    width: 100%;
    height: 100%;
    display: inline-block;
    background-size: 100%;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${PayImg});
`
export const Input = styled.input`
    width: 100%;
    height: 96px;
    color: #3D3D4B;
    font-size: 40px;
    margin-top: 32px;
    font-weight: 700;
    line-height: 64px;
    padding: 16px 20px 16px 24px;
    border: 2px solid var(--line-color);
    border-radius: var(--card-brd-radius);
    &:focus, &:active {
        outline: none;
        border: 2px solid #33BAFF;
        transition: var(--card-click-transition);
    }
    @media ${device.tablet1}{
        height: 80px;
        font-size: 36px;
        margin-top: 30px;
        line-height: 56px;
        padding: 16px 100px 16px 24px;
    }
    @media ${device.tablet}{
        width: 100%;
        height: 60px;
        font-size: 26px;
        margin-top: 20px;
        line-height: 56px;
        padding: 16px 0 16px 24px;
    }
`
export const InfoText = styled.div`
    width: 100%;
    margin: 4px 0 14px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.04em;
    @media ${device.tablet} {
        margin: 4px 0 10px 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
    }
`
export const DangerText = styled.span`
    color: #F32F2F;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.04em;
`
export const Text = styled.span`
    color: #5B5B5E;
`
export const Hr = styled.hr`
    border: 0;
    width: 100%;
    margin-bottom: 16px;
    border-bottom: 2px solid var(--line-color);
    @media ${device.tablet} {
        margin-bottom: 10px;
    }
`
export const DataInfo = styled.div``
export const DataInfoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    @media ${device.tablet} {
        &:not(:last-child) {
            margin-bottom: 4px;
        }
    }
`
export const Label = styled.label`
    color: #5B5B5E;
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
    @media ${device.tablet} {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
    }
`
export const Phone = styled(Currency)`
    ${infoCommon};
    color: #132447;
`
export const Amount = styled(Currency)`
    ${infoCommon};
    color: #33BAFF;
`
export const Footer = styled.div`
    width: 100%;
    display: flex;
    padding: 0 80px;
    align-items: center;
    justify-content: space-between;

    @media ${device.tablet1} {
        /* margin: 30px 0 30px 65px; */
    }
    @media ${device.tablet} {
        /* margin: 0 0 30px 45px; */
    }
`