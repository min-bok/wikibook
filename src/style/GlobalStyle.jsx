import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* 폰트 ------------------------------------------------------- */
@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
    format('woff');
  font-weight: 600;
  font-style: bold;
}
@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
    format('woff');
  font-weight: 700;
  font-style: bold;
}
@font-face {
  font-family: 'Source Code Pro';
  src: url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap');
  font-weight: 500;
  font-size: medium;
}
/* ------------------------------------------------------------- */
html {
    font-size: 62.5%;
}

body {
    background-color: pink;
    font-family: "Pretendard";
}


`;

export default GlobalStyle;
