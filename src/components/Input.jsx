/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Input = ({ value }) => {
  return (
    <input
      value={value}
      css={css`
        width: 295px;
        height: 16px;
        background-color: #f5f5f5;
        color: #000000;
        border-radius: 20px;
        padding: 12px 16px 12px 16px;
        font-size: 12px;
        border: none;
      `}
    ></input>
  );
};

export default Input;
