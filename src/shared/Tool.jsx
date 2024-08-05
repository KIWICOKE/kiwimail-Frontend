import styled from "@emotion/styled";

export const Space = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "")};
`;

export const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : "row")};
  justify-content: ${({ justify }) => (justify ? `${justify}` : "center")};
  align-items: ${({ align }) => (align ? `${align}` : "center")};
`;
