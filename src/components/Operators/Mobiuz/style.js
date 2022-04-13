import styled from "styled-components";
import { device } from "utils/responsive";
import Mobiuz from 'assets/icons/mobiuz1.svg';
export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 20px 20px 0;
`
export const Content = styled.button`
    width: var(--card-width);
    height: var(--card-height);
    border-radius: var(--card-brd-radius);
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--card-box-shadow);
    -moz-box-shadow: var(--card-box-shadow);
    -webkit-box-shadow: var(--card-box-shadow);
    background: #fff url(${Mobiuz}) center / auto no-repeat;

    @media ${device.tablet} {
        width: var(--card-min-width);
        height: var(--card-min-height);
        border-radius: var(--card-min-brd-radius);
        background: #fff url(${Mobiuz}) center / 140% 140% no-repeat;
    }
`