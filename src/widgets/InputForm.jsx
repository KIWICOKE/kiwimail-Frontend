import styled from "@emotion/styled";
import { Space, Flex } from "../shared/Tool";
import { useState } from "react";
import Button from "../components/Button";
import loginAPI from "../apis/loginAPI";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [insta, setInsta] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const response = loginAPI.SIGNUP({
      Name: name,
      Insta: insta,
    });

    if (response.status === 200) {
    }
  };

  return (
    <Wrapper direction="column">
      <form onSubmit={handleSignUp}>
        <Input
          placeholder={"이름"}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Space height={20}></Space>
        <Input
          placeholder={"Instagram ID"}
          type={"text"}
          value={insta}
          onChange={(e) => setInsta(e.target.value)}
        ></Input>
        <Space height={20}></Space>
        <Button onClick={handleSignUp}>가입하기</Button>
      </form>
    </Wrapper>
  );
};
