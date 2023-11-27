import styled, { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactTostify.css';

export const colors = {
  primary: "#D2B48C",
  secondary: "#432109",
  third: "#FAEBD7",
  black: "#000",
  white: "#fff"
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Libre Baskerville', 'serif';
    font-weight: 400;
  }
  body{
    background-color: ${colors.third};
  }
  h1, h2 {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 4.5rem;
    color: ${colors.secondary};
}

`
