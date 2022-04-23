import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';
import { device } from 'utils/responsive';
export const GlobalStyle = createGlobalStyle`
    html, body, #root{
        height: 100vh;
        margin: 0 auto;
        width: 100%;
        background-color: #fff;
    }
    * {
        /* @import url('./font.css'); */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }
    .carousel-container {
        margin-left: 50px;
        margin-top: 40px;
        @media ${device.tablet} {
            margin-left: 30px;
            margin-top: 20px;
        }
    }
    .carousel-container .carousel-item {
        @media ${device.tablet} {
            &:not(:last-child) {
                margin-right: 26px;
        }
    }
    }
    :root {
        --black:#565656;
        --black1:#3D3E53;
        --line-color: #E3E3E3;
        --primary-color: #00C2F4;
        --btn-hover-color: #7e7e80;
        --card-width: 210px;
        --card-height: 110px;
        --card-brd-radius: 8px;
        --card-min-width: 120px;
        --card-min-height: 70px;
        --card-min-brd-radius: 4px;
        --card-text-color: #343437;
        --card-box-shadow: 0px 11px 17px 10px rgba(34, 60, 80, 0.2);
        --card-hover-shadow: 0 16px 16px rgb(0 0 0 / 7%);
        --card-transition: .5s;
        --card-click-transition: .3s;
    }
`
export const LinkTo = styled(Link)`
    color: #fff;
    text-decoration: none;
    pointer-events: ${({ length }) => length ? 'none' : 'pointer'};
`