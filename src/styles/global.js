import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --toastify-color-dark: #232129;
  --toastify-color-progress-info: #FF9000;

}
*{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: "Roboto", serif-serif;
    font-size: 17px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }}

  #root{
    width:100%;
    max-width: 1440px;

    margin-inline: auto;
  }
`