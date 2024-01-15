import { css } from "@emotion/react";

const Button = ({ text }) => {
  return (
    <button
      css={css`
        width: 327px;
        height: 56px;
        background-color: #d9d9d9;
        color: #000000;
        border: none;

        &:hover {
          background-color: #b9b9b9;
        }
      `}
    >
      {text}
    </button>
  );
};

export default Button;
