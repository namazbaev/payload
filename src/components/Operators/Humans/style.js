import styled from "styled-components";
import { device } from "utils/responsive";
import Humans from 'assets/icons/humans.svg';
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
    background: #F7C100 url(${Humans}) center / 100% no-repeat;
    @media ${device.tablet} {
        width: var(--card-min-width);
        height: var(--card-min-height);
        border-radius: var(--card-min-brd-radius);
        background: #F7C100 url(${Humans}) center / 110% no-repeat;
    }
`