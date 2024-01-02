import image from "../assets/envelope.webp";

const Post = () => {
  const style = {
    width: "80px",
    height: "80px",
  };
  return (
    <div>
      <img src={image} alt="envelop" style={style}></img>
    </div>
  );
};

export default Post;
