import styled from "styled-components";
import { device } from "utils/responsive";

export const Container = styled.div`
    width: 91%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 27px;
    @media ${device.tablet} {
        width: 87%;
    }
`
export const Content = styled.div`
    width: 208px;
    height: 126px;
    margin: 13px 12px;
    cursor: pointer;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));
    background: #fff url(${({ img }) => img || ''}) center / ${({ size }) => size ? size : '160px 100px'} no-repeat;

    @media ${device.tablet} {
        width: 150px;
        height: 90px;
        margin: 10px;
        background: #fff url(${({ img }) => img || ''}) center / ${({ size }) => size ? size : '120px 70px'} no-repeat;
    }
`