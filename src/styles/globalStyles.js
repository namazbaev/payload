import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, #root{
        height: 100vh;
        margin: 0 auto;
        padding: 0 10px;
        max-width: 1300px;
        /* overflow: hidden; */
        background-color: #fff;
    }
    * {
        @import url('./font.css');
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
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
        --card-min-brd-radius: 10px;
        --card-box-shadow: 0px 11px 17px 10px rgba(34, 60, 80, 0.2);
    }
`