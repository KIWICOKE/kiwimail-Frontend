/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import HeaderDefault from "../components/HeaderDefault";
import Input from "../components/Input";
import { Switch } from "@mui/material";

const SignupPage = () => {
  return (
    <div
      css={css`
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <HeaderDefault text="로그인"></HeaderDefault>
      <br />
      <br />
      <br />
      <br />

      <form
        css={css`
          height: 515px;
        `}
      >
        <Input value={"이름"}></Input>
        <br />
        <br />

        <Input value={"Instagram ID"}></Input>
        <br />
        <br />

        <Input value={"E-mail"}></Input>
        <br />
        <br />
        <br />
        <br />
        <div
          css={css`
            position: relative;
            left: 120px;
            display: flex;
            align-items: center;
          `}
        >
          <div>(선택) 정기적 홍보 메일 수신</div>
          <Switch></Switch>
        </div>

        <br />
        <br />
        <br />
        <br />
        <Button
          css={css`
            position: relative;
            bottom: 10px;
          `}
          text={"회원가입"}
        ></Button>
      </form>
    </div>
  );
};

export default SignupPage;
