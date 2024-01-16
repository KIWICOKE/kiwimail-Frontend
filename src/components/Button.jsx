/** @jsxImportSource @emotion/react */

const Button = ({ text }) => {
  const buttonStyle = {
    width: "327px",
    height: "56px",
    padding: "10px",
    backgroundColor: "#d9d9d9",
    color: "#000000",
    border: "none",
    borderRadius: "24px",
    fontSize: "16px",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "#b9b9b9",
    },
  };

  return <button css={buttonStyle}>{text}</button>;
};

export default Button;
