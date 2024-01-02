import Header from "../components/Header";
import postbox from "../assets/postbox.jpeg";

const PagePostbox = () => {
  return (
    <div>
      <Header></Header>
      <div className="postbox">
        <img src={postbox} alt="postbox"></img>
      </div>
    </div>
  );
};

export default PagePostbox;
