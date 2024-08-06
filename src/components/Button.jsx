/** @jsxImportSource @emotion/react */

const Button = ({ text }) => {
  const buttonStyle = {
    width: "327px",
    height: "56px",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    color: "#000000",
    border: "none",
    borderRadius: "24px",
    fontSize: "16px",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "#d9d9d9",
    },
  };

  return <button css={buttonStyle}>{text}</button>;
};

export default Button;
