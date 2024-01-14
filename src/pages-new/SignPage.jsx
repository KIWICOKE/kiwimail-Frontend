import { css } from "@emotion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SignPage = () => {
  return (
    <div
      css={css`
        justify-content: center;
      `}
    >
      <Link to="/login">
        <Button>로그인</Button>
      </Link>
      <Link to="/mailbox">
        <Button>우편함</Button>
      </Link>
      <Link to="/write">
        <Button>편지 작성하기</Button>
      </Link>
    </div>
  );
};
