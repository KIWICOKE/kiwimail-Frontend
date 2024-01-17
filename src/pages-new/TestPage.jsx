import Button from "../components/Button";
import HeaderMailbox from "../components/HeaderMailbox";
import HeaderMailboxSub from "../components/HeaderMailboxSub";
import Input from "../components/Input";
import Letter from "../components/Letter";
import Space from "../components/Space";

const TestPage = () => {
  return (
    <div>
      <HeaderMailbox name="이혁"></HeaderMailbox>
      <HeaderMailboxSub count="4"></HeaderMailboxSub>
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
