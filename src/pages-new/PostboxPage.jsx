/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import HeaderDefault from "../components/HeaderDefault";
import Input from "../components/Input";
import { Switch } from "@mui/material";
import HeaderMailbox from "../components/HeaderMailbox";
import HeaderMailboxSub from "../components/HeaderMailboxSub";

const LoginPage = () => {
  return (
    <div>
      <HeaderMailbox name={"이혁"}></HeaderMailbox>
      <HeaderMailboxSub count={10}></HeaderMailboxSub>
    </div>
  );
};

export default LoginPage;
