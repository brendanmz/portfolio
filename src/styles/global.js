import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
      min-height: 100%;
      margin: 0;
  }
  body {
      min-height: 100%;
      margin: 0;
      font-family: Poppins, sans-serif;
      background-color: #000;
  }

  h1 { 
    font-family: Comfortaa, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`
