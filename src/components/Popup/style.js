import styled from "styled-components";
import ErrorIcon from 'assets/icons/error.svg';
import { device } from "utils/media/responsive";
import SuccessIcon from 'assets/icons/success.svg';

export const BackDrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    /* background-color: #C1C1C1; */
    background-color: rgba(0,0,0,0.5);
    top: ${({ active }) => active ? "0%" : 0};
    left: 0;
    transition: all 0.5s;
    transform: ${({ active }) => active ? 'translateY(0)' : 'translateY(-100vh)'};
`
export const Container = styled.div`
    width: 544px;
    height: 456px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
    padding: 36px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    text-align: center;
    opacity: ${({ active }) => active ? 1 : 0};
    top: ${({ active }) => active ? '50%' : '-200%'};
    transform: ${({ active }) => active ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.5)"};
    transition: ${({ active }) => active ? "transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19)" : "opacity 300ms ease-in-out, top 1000ms ease-in-out, transform 1000ms ease-in-out"};
    box-sizing: border-box;
    background-color: #fff;
    border-radius: var(--card-brd-radius);

    @media ${device.tablet} {
        width: 430px;
        height: 350px;
        padding: 26px;
    }
`
export const IconSection = styled.div`
    width: 96px;
    height: 96px;
    margin: 0 auto;

    @media ${device.tablet} {
        width: 65px;
        height: 65px;
    }
`
export const Icon = styled.span`
    width: 100%;
    height: 100%;
    display: inline-block;
    background-size: 100%;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${({ isSuccess }) => isSuccess ? SuccessIcon : ErrorIcon});
`
export const Title = styled.h3`
    color: #132447;
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
    margin-top: 24px;
    margin-bottom: 16px;

    @media ${device.tablet} {
        font-size: 24px;
        font-weight: 600;
        line-height: 16px;
        margin-top: 12px;
        margin-bottom: 8px;
    }
`
export const More = styled.div`
    margin-bottom: 32px;
    @media ${device.tablet} {
        margin-bottom: 16px;
    }
`
export const Description = styled.p`
    margin: 0;
    color: #717C91;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0.04em;
    @media ${device.tablet} {
        font-size: 18px;
        line-height: 30px;
    }
`
export const Button = styled.button`
    width: 100%;
    height: 64px;
    border: none;
    outline: none;
    text-align: center;
    background-color: #00C35A;
    border-radius: var(--card-brd-radius);
    font-size: 26px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.04em;
    color: #fff;
    cursor: pointer;

    &:active {
        background-color: #02A84F;
        transition: var(--card-click-transition);
    }
    @media ${device.tablet} {
        font-size: 22px;
        line-height: 30px;
        height: 46px;
    }
`