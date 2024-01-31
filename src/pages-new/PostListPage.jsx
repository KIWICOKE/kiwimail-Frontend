import Header from "../components/Header";
import Envelope from "../components/Envelope";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostListPage = () => {
  const user_id = useParams().user_id;

  useEffect(() => {}, []);

  return (
    <div>
      <Header text={"이혁의 우편함"}></Header>
      <Envelope></Envelope>
    </div>
  );
};

export default PostListPage;
