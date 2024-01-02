import menu from "../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    width: "40px",
    height: "40px",
    paddingLeft: "100px",
  };
  return (
    <Link to="/">
      <div className="header">
        <h1>이혁의 우편함</h1>
        <img src={menu} alt="menu" style={style}></img>
      </div>
    </Link>
  );
};

export default Header;
