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
        grid-template-columns: auto auto auto;
    }
    @media ${device.tablet} {
        margin: 16px 0;
        padding: 0 30px;
        grid-template-columns: auto auto auto auto;
    }
`
export const Content = styled.div`
    margin: 12px;
    height: 126px;
    cursor: pointer;
    border-radius: 8px;
    transition: box-shadow var(--card-transition);
    filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));
    background: #fff url(${({ img }) => img || ''}) center / ${({ size }) => size ? size : '160px 100px'} no-repeat;
    &:hover {
        box-shadow: var(--card-hover-shadow);
    }
    &:active {
        transition: .2s;
        transform: translateY(1px);
    }
    @media ${device.tablet} {
        height: 90px;
        background: #fff url(${({ img }) => img || ''}) center / ${({ size }) => size ? size : '120px 70px'} no-repeat;
    }
`