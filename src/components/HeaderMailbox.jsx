/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Menu } from "@mui/icons-material";

const HeaderMailbox = ({ name }) => {
  return (
    <div
      css={css`
        width: 375px;
        height: 128px;
        background-color: transparent;
        position: relative;

        font-size: 20px;
      `}
    >
      <div
        css={css`
          width: 311px;
          position: absolute;
          left: 32px;
          bottom: 16px;
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>{name} 의 우편함</div>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default HeaderMailbox;
