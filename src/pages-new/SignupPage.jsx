/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import { Switch } from "@mui/material";
import Header from "../components/Header";
import Space from "../components/Space";
import { useState } from "react";

const SignupPage = () => {
  const [user, setUser] = useState();

  return (
    <div
      css={css`
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <Header text={"회원가입"} link={"/sign"}></Header>
      <Space size={128}></Space>
      <form
        css={css`
          height: 556px;
        `}
      >
        <Input value={"이름"}></Input>
        <Space size={20}></Space>
        <Input value={"Instagram ID"}></Input>
        <Space size={48}></Space>

        <Input value={"E-mail"}></Input>
        <Space size={32}></Space>
        <div
          css={css`
            position: relative;
            left: 120px;
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-size: 16px;
            `}
          >
            (선택) 정기적 홍보 메일 수신
          </div>
          <Switch></Switch>
        </div>
        <Space size={194}></Space>

        <Button text={"회원가입"}></Button>
      </form>
    </div>
  );
};

export default SignupPage;
