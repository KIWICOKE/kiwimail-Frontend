import { useState } from "react";

const submitLogin = async (e) => {
  e.preventDefault();
  console.log(e.target);

  await fetch("http://localhost:5176/login", {
    method: "POST",
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

const Login = () => {
  const [formValue, setFormValue] = useState({
    name: " ",
    insta: " ",
    email: " ",
  });

  return (
    <div className="login">
      <form onSubmit={submitLogin}>
        <input
          name="name"
          type="text"
          value={formValue.name}
          placeholder={"이름을 입력하시오."}
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
        ></input>
        <input
          name="insta"
          type="text"
          value={formValue.insta}
          placeholder={"인스타그램 ID를 입력하시오."}
          onChange={(e) =>
            setFormValue({ ...formValue, insta: e.target.value })
          }
        ></input>
        <input
          name="email"
          type="text"
          value={formValue.email}
          placeholder={"이메일을 입력하시오."}
          onChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
        ></input>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Login;
