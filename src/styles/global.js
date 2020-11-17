import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus{
        outline: 0;
    }
    body, * {
        -webkit-font-smoothing: antialiased;
    }
    body, button, input{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500; 
        font-style: normal;
    }
    ol, ul {
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
        border: none;
    }
`

export default GlobalStyle;