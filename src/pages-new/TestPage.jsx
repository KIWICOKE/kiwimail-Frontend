import Button from "../components/Button";

import Input from "../components/Input";
import Letter from "../components/Letter";
import Space from "../components/Space";

const TestPage = () => {
  return (
    <div>
      <Input value={"이름"}></Input>

      <Letter></Letter>
      <Input value={"Instagram ID"}></Input>
      {/* <Space size={20}></Space> */}
      <br />
      <Button text="확인"></Button>
    </div>
  );
};

export default TestPage;
