/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const Subtitle = ({ count }) => {
  return (
    <div>
      <div
        css={css`
          width: 100%;
          height: 24px;
        `}
      >
        <div
          css={css`
            display: flex;

            align-items: center;
            padding: 0px 16px 0px 16px;
          `}
        >
          <div
            css={css`
              font-size: 16px;
              font-weight: regular;
            `}
          >
            {`${count}개의 편지가 있습니다!`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subtitle;
