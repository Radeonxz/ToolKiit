import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serfi;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  hi {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serfi;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    // --webkit-background-clip: text;
    // --webkit-text-fill-color: transparent;
    // --moz-background-clip: text;
    // --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }
`;
