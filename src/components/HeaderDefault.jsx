/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ArrowBackIosNew } from "@mui/icons-material";

const HeaderDefault = ({ text }) => {
  return (
    <div
      css={css`
        width: 375px;
        height: 64px;
        background-color: #f5f5f5;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <ArrowBackIosNew></ArrowBackIosNew>
      <div
        css={css`
          font-size: 16px;
          font-weight: bold;
        `}
      >
        {text}
      </div>
      <div
        css={css`
          width: 24px;
        `}
      ></div>
    </div>
  );
};

export default HeaderDefault;
