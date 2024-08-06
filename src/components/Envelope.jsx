/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import envelope from "../assets/envelope.webp";

const Envelope = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <img
        src={envelope}
        alt="envelope"
        css={css`
          width: 80px;
        `}
      ></img>
      <div>이혁</div>
    </div>
  );
};

export default Envelope;
