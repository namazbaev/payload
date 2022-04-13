import styled from "styled-components";
import { device } from "utils/responsive";

export const Operator = styled.button`
    width: var(--card-width);
    height: var(--card-height);
    border-radius: var(--card-brd-radius);
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));
    background: #fff url(${({ img }) => img || ''}) center / auto no-repeat;
    &:not(:last-child){
        margin-right: 26px;
    }
    @media ${device.tablet} {
        width: var(--card-min-width);
        height: var(--card-min-height);
        border-radius: var(--card-min-brd-radius);
        background: #fff url(${({ img }) => img || ''}) center / ${({ size }) => size || '130%'} no-repeat;
    }
`