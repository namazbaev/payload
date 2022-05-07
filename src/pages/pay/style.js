import styled from "styled-components";
import { device } from "utils/media/responsive";
import PayImg from 'assets/images/cards/payinfo.svg';

export const Div = styled.div`
    height: 80vh;
    display: ${({ isShow }) => isShow ? "none" : "flex"} ;
    flex-direction: column;
    justify-content: space-between;
`
export const Container = styled.div`
    width: 550px;
    margin: 0 auto;
    margin-top: 30px;
    @media ${device.tablet} {
        width: 380px;
        margin-top: 8px;
    }
`
export const ImageWrap = styled.div`
    width: 205px;
    height: 205px;
    margin: 0 auto;
    @media ${device.tablet} {
        width: 135px;
        height: 135px;
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
export const InfoText = styled.div`
    width: 100%;
    margin: 4px 0 14px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.04em;
    @media ${device.tablet} {
        margin: 4px 0 6px 0;
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
        margin-bottom: 6px;
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
            margin-bottom: 0;
        }
    }
`
export const Label = styled.label`
    color: #5B5B5E;
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
    @media ${device.tablet} {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
`
export const Footer = styled.div`
    width: 100%;
    display: flex;
    margin: 10px 0;
    padding: 0 80px;
    align-items: center;
    justify-content: space-between;
`