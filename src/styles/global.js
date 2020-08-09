import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}


  body { 
    font-family: Poppins, sans-serif;
  }

  h1 { 
    font-family: Comfortaa, sans-serif;
  }

`
