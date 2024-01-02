import { useState } from "react";
import { Box } from "../utils/Box";

const Login = () => {
  const [name, setName] = useState("");
  const [insta, setInsta] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login">
      <Box
        name={name}
        pl="이름을 입력하시오."
        onChange={(e) => setName(e.target.value)}
      ></Box>
      <Box
        name={insta}
        pl="인스타그램 ID를 입력하시오."
        onChange={(e) => setInsta(e.target.value)}
      ></Box>
      <Box
        name={email}
        pl="이메일을 입력하시오."
        onChange={(e) => setEmail(e.target.value)}
      ></Box>
      <button onClick={console.log(name, insta)}>회원가입</button>
    </div>
  );
};

export default Login;
