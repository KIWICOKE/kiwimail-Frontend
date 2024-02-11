/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Menu from "../assets/menu.png";

const Title = ({ name }) => {
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
          <div
            css={css`
              font-size: 20px;
              font-weight: bold;
            `}
          >
            {`${name}의 우편함`}
          </div>
          <img
            src={Menu}
            alt={"MenuButton"}
            css={css`
              height: 24px;
            `}
            onClick={() => {}}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Title;
