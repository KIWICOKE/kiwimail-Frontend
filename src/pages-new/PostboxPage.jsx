/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { useParams } from "react-router-dom";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

import Postbox from "../assets/postbox.png";

const DATABASE = [
  {
    user_id: 1,
    name: "진짜이혁",
  },
];

const PostboxPage = () => {
  const user_id = useParams().user_id;
  const user = DATABASE.find((element) => {
    element.user_id == user_id;
  }); // user 찾는 로직 수정 필요

  return (
    <div>
      <Title name={user?.name || "가짜이혁"}></Title>
      <Subtitle count={10}></Subtitle>
      <div
        css={css`
          display: flex;
        `}
      ></div>
      <img src={Postbox}></img>
    </div>
  );
};

export default PostboxPage;
