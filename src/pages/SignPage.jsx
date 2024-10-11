/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Space } from "../shared/Tool";

const SignPage = () => {
  return (
    <div
      css={css`
        text-align: center;
        position: relative;
        top: 50%;
        transform: translate(0, -50%);

        flex-direction: column;
        display: flex;
      `}
    >
      <Link to="/signup">
        <Button>로그인</Button>
      </Link>
      <Space height={40}></Space>
      <Link to="/postbox/1">
        <Button>우편함</Button>
      </Link>
      <Space height={40}></Space>

      <Link to="/write/1">
        <Button>편지 작성하기</Button>
      </Link>
    </div>
  );
};

export default SignPage;
