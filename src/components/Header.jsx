/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Back from "../assets/BackButton.svg";

const Header = ({ text }) => {
  return (
    <div>
      <div
        css={css`
          width: 100%;
          height: 128px;
        `}
      >
        <div
          css={css`
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: center;
            top: 88px;
            padding: 0px 16px 0px 16px;
          `}
        >
          <img
            src={Back}
            alt={"BackButton"}
            css={css`
              height: 24px;
            `}
            onClick={() => {}}
          ></img>
          <div
            css={css`
              font-size: 20px;
              font-weight: bold;
            `}
          >
            {text}
          </div>
          <div
            css={css`
              width: 16px;
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
