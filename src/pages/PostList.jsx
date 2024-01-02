import Header from "../components/Header";
import Post from "../components/Post";

const PagePosts = () => {
  return (
    <div>
      <div className="head">
        <Header className="header"></Header>
        <h3 className="header2">총 3개의 편지가 왔습니다.</h3>
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

export default PagePosts;
