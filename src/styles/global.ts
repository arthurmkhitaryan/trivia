import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: "Quicksand";
  }

  button {
    cursor: pointer;

    :disabled {
      cursor: default;
    }
  }
`;