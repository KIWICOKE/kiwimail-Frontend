/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SignPage = () => {
  return (
    <div
      css={css`
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        display: flex;
      `}
    >
      <Link to="/login">
        <Button text="로그인"></Button>
      </Link>
      <br />
      <Link to="/mailbox">
        <Button text="우편함"></Button>
      </Link>
      <br />
      <Link to="/write">
        <Button text="편지 작성하기"></Button>
      </Link>
      <br />
    </div>
  );
};

export default SignPage;
