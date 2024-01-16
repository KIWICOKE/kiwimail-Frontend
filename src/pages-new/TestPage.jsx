import Button from "../components/Button";
import HeaderMailbox from "../components/HeaderMailbox";
import HeaderMailboxSub from "../components/HeaderMailboxSub";
import Input from "../components/Input";
import Letter from "../components/Letter";

const TestPage = () => {
  return (
    <div>
      <Button text="확인"></Button>
      <HeaderMailbox name="이혁"></HeaderMailbox>
      <HeaderMailboxSub count="4"></HeaderMailboxSub>
      <Input value={"input"}></Input>
      <Letter></Letter>
    </div>
  );
};

export default TestPage;
