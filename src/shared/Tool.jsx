import styled from "@emotion/styled";

export const Space = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "")};
`;
