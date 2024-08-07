import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const GlobalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  font-family: "Pretendard-Regular";
`;
