import { css } from "@emotion/react";
import image from "../assets/envelope.webp";

const Post = () => {
  const style = {
    width: "80px",
    height: "80px",
  };
  return (
    <div>
      <img
        src={image}
        alt="envelop"
        css={css`
          width: 80px;
          height: 80px;
        `}
      ></img>
    </div>
  );
};

export default Post;
