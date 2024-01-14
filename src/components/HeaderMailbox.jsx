import { css } from "@emotion/react";

const HeaderMailbox = ({ name }) => {
  return (
    <div
      css={css`
        width: 327px;
        height: 128px;
        background-color: #d9d9d9;
      `}
    >
      <div
        css={css`
          position: absolute;
          bottom: 16px;
        `}
      >
        <div>{name}의 우편함</div>
        <img src="" alt="menu"></img>
      </div>
    </div>
  );
};

export default HeaderMailbox;
