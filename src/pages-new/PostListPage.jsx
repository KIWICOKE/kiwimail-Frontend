import Header from "../components/Header";
import Post from "../components/Post";

const PostListPage = () => {
  return (
    <div>
      <div className="head">
        <Header className="header"></Header>
        <h3 className="header">총 3개의 편지가 왔습니다.</h3>
      </div>

      <br />

      <div className="post">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <br />
      </div>

      <div className="post">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <br />
      </div>

      <div className="post">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <br />
      </div>
    </div>
  );
};

export default PostListPage;
