import styled from "styled-components";
import { device } from "utils/responsive";

export const Container = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${device.tablet} {
        
    }
`
export const Footer = styled.div`
    display: flex;
    height: 100px;
    width: 50%;
    align-items: center;
    margin: 40px 0 30px 65px;
    justify-content: space-between;

    @media ${device.tablet1} {
        margin: 30px 0 30px 65px;
    }
    @media ${device.tablet} {
        margin: 0 0 30px 45px;
    }
`
export const Wrap = styled.div`
    display: grid;
    padding: 0 50px;
    margin-top: 27px;
    grid-template-columns: auto auto auto auto auto;
    @media ${device.tablet1} {
        grid-template-columns: auto auto auto auto;
    }
    @media ${device.tablet} {
        margin: 16px 0;
        padding: 0 30px;
        grid-template-columns: auto auto auto auto;
    }
`
export const Content = styled.div`
    margin: 12px;
    width: 211px;
    height: 128px;
    cursor: pointer;
    border-radius: 8px;
    transition: box-shadow var(--card-transition);
    filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));
    &:hover {
        box-shadow: var(--card-hover-shadow);
    }
    &:active {
        transition: .2s;
        transform: translateY(1px);
    }
    @media ${device.tablet1} {
        
    }
    @media ${device.tablet} {
        height: 80px;
        width: 150px;
    }
`
export const CardImage = styled.span`
    width: 100%;
    height: 100%;
    font-size: 0;
    line-height: 0;
    border-radius: 6px;
    display: inline-block;
    vertical-align: middle;
    background-color: #fff;
    background-size: auto auto;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${({ img }) => img || ''});
    @media ${device.tablet1} {
        width: 100%;
        height: 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${({ img }) => img || ''});
        background-size: ${({ size }) => size ? size : 'auto'};
    }
    @media ${device.tablet} {
        width: 100%;
        height: 100%;
        background-size: 120% auto;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url(${({ img }) => img || ''});
    }
`