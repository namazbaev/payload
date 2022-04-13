import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    html, body, #root{
        height: 100%;
        margin: 0 auto;
        max-width: 1280px;
    }
    * {
        @import url('./font.css');
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root {
        --primary-color: #00C2F4;
        --btn-hover-color: #7e7e80;
        --card-width: 190px;
        --card-height: 110px;
        --card-brd-radius: 35px;
        --card-min-width: 120px;
        --card-min-height: 80px;
        --card-min-brd-radius: 25px;
        --card-box-shadow: 0px 11px 17px 10px rgba(34, 60, 80, 0.2);
    }
`