import Snowfall from "../Snowfall";
import SignImg from "../assets/SignPixel.png";
import { Link } from "react-router-dom";

const SignPage = () => {
  return (
    <div>
      <div className="app-container">
        <Snowfall />

        <div className="image-container">
          <Link to="/login">
            <img src={SignImg} alt="login" />
            <p>로그인</p>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/postbox">
            <img src={SignImg} alt="mailbox" />
            <p>우편함</p>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/compose">
            <img src={SignImg} alt="compose" />
            <p>편지 작성하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
