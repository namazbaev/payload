import styled from "styled-components";
import { device } from "utils/media/responsive";

export const Container = styled.div`
    width: 100%;
    padding: 0 48px;
`
export const LogoWrap = styled.div`
    width: 366px;
    height: 112px;
    margin: 0 auto;
    margin-top: 75px;
    margin-bottom: 60px;
    @media ${device.tablet} {
        width: 250px;
        height: 80px;
        margin-top: 30px;
        margin-bottom: 25px;
    }
`
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const InputWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Footer = styled.div`
    width: 100%;
    display: flex;
    margin: 100px 0 50px 0;
    padding: 0 80px;
    align-items: center;
    justify-content: space-between;
    @media ${device.tablet} {
        margin: 80px 0 30px 0;
    }
`