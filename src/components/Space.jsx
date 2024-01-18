/** @jsxImportSource @emotion/react */

const Space = ({ size }) => {
  return (
    <div
      css={css`
        width: 375px;
        height: ${size}px;
        background-color: transparent;
      `}
    ></div>
  );
};

export default Space;
