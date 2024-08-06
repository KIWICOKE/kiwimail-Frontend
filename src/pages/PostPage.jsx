/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Title from "../components/Title";
import Letter from "../components/Letter";
import Button from "../components/Button";

const PostPage = () => {
  return (
    <div
      css={css`
        justify-content: center;
      `}
    >
      <Title name={"이혁"}></Title>
      <Letter></Letter>
      <Button text={"우편함으로 돌아가기"}></Button>
    </div>
  );
};

export default PostPage;
