import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
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
* {
  box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: "Pretendard";
    overflow-x: hidden;

    
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

/* 미디어쿼리 ------------------------------------------------------- */
  /* @media (max-width: 768px) {

  } */
`;

export default GlobalStyle;
