import styled from "@emotion/styled";
import { Space, Flex } from "../shared/Tool";
import { useState } from "react";

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
  return (
    <Wrapper direction="column">
      <form>
        <Input placeholder={"이름"}></Input>
        <Input placeholder={"Instagram ID"}></Input>
        <Input placeholder={"E-mail"}></Input>
      </form>
    </Wrapper>
  );
};
