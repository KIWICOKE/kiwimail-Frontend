import Header from "../components/Header";
import postbox from "../assets/postbox.png";
import { Link } from "react-router-dom";

const PostboxPage = () => {
  return (
    <div>
      <Header></Header>
      <Link to="/post">
        <div className="postbox image-container">
          <img src={postbox} alt="postbox"></img>
        </div>
      </Link>
    </div>
  );
};

export default PostboxPage;
