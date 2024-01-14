import { css } from "@emotion/react";

export const calcRem = (px) => `${px / 16}rem`;

export const typo = {
  main: css`
    font-family: "Pretendard";
    font-size: ${calcRem(28)};
    font-weight: 700;
  `,
  pixel: css`
    font-family: "";
    font-size: ${calcRem(28)};
    font-weight: 700;
  `,
};
