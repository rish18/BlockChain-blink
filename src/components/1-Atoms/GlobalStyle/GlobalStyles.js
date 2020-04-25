import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    color: $first-color;
    font-family: fira-sans, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 100vh;
    margin: 0;
  }

  /* stylelint-disable-next-line selector-max-id */
  #root {
    height: 100%;
  }

  h1 {
    margin-top: 0;
  }
`;
