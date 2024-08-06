/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import { Switch } from "@mui/material";
import Header from "../components/Header";
import Space from "../components/Space";
import { useState } from "react";
import { InputForm } from "../widgets/InputForm";

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
      <InputForm></InputForm>
    </div>
  );
};

export default SignupPage;
