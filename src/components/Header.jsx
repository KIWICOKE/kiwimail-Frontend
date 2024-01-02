import menu from "../assets/menu.png";

const Header = () => {
  const style = {
    width: "40px",
    height: "40px",
    paddingLeft: "100px",
  };
  return (
    <div className="header">
      <h1>이혁의 우편함</h1>
      <img src={menu} alt="menu" style={style}></img>
    </div>
  );
};

export default Header;
