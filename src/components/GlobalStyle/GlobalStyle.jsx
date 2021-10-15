import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
        color: #eee;
        outborder: none;
    }

    html {
        height: 100%;
        width: 100%;
    }
    
    body {
        background: #232323;
        height: 100%;
        width: 100%;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`