/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

const HomeDefault = () => {
  return (
    <div
      css={css`
        background-color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          background: var(
            --background,
            linear-gradient(180deg, #f5f5f5 70%, #d9d9d9 100%)
          );
          width: 375px;
          height: 812px;
        `}
      >
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              position: absolute;
              width: 375px;
              height: 812px;
              top: 0px;
            `}
          >
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDefault;
