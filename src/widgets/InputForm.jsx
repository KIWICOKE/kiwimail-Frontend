import styled from "@emotion/styled";
import { Space, Flex } from "../shared/Tool";
import { useState } from "react";
import { Button } from "../components/Button";

const Wrapper = styled(Flex)``;

const Input = styled.input`
  width: 295px;
  height: 16px;
  background-color: #f5f5f5;
  color: #000000;
  border-radius: 20px;
  padding: 12px 16px 12px 16px;
  font-size: 12px;
  border: none;
`;

export const InputForm = () => {
  let [name, setName] = useState("");
  let [insta, setInsta] = useState("");

  const handleSignUp = () => {};

  return (
    <Wrapper direction="column">
      <form>
        <Input
          placeholder={"이름"}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder={"Instagram ID"}
          type={"text"}
          value={insta}
          onChange={(e) => setInsta(e.target.value)}
        ></Input>
        <Button text={"회원가입"} onClick></Button>
      </form>
    </Wrapper>
  );
};
