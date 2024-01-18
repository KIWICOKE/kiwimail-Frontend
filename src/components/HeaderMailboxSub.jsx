/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HeaderMailboxSub = ({ count }) => {
  return (
    <div
      css={css`
        width: 343px;
        height: 24px;
        background-color: transparent;
        padding-left: 32px;
      `}
    >
      {count}개의 편지가 있습니다!
    </div>
  );
};

export default HeaderMailboxSub;
