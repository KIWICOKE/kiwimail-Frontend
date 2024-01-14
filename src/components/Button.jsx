import { css } from "@emotion/react";

const Button = () => {
  return (
    <button
      css={css`
        all: unset;
        width: 327px;
        height: 56px;
        background-color: #d9d9d9;
        color: #000000;

        &:hover {
          background-color: #b9b9b9;
        }
      `}
    ></button>
  );
};

export default Button;
