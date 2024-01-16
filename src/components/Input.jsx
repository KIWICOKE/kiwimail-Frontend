/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Input = ({ value }) => {
  return (
    <input
      value={value}
      css={css`
        width: 327px;
        height: 40px;
        background-color: #d9d9d9;
        color: #000000;
      `}
    ></input>
  );
};

export default Input;
