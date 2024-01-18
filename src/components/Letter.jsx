/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Letter = () => {
  return (
    <div
      css={css`
        width: 327px;
        height: 480px;

        border-radius: 32px;
      `}
    >
      <textarea
        css={css`
          width: 279px;
          height: 432px;
          background-color: #f5f5f5;
          padding: 24px;
          font-size: 16px;
          resize: none;
          border-radius: 32px;
          border: none;
        `}
      ></textarea>
    </div>
  );
};

export default Letter;
