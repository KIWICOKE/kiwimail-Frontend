import { css } from "@emotion/react";

const Letter = () => {
  return (
    <div
      css={css`
        width: 327px;
        height: 480px;
        background-color: #d9d9d9;
      `}
    >
      <textarea></textarea>
    </div>
  );
};

export default Letter;
