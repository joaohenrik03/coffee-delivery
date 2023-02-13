import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 50%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box  ;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    -webkit-font-smoothing: antialiased;

    color: ${(props) => props.theme['base-text']}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']}
  }

  button {
    cursor: pointer;
  }
`
