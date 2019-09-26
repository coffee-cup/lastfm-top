import styled from "styled-components";

const Link = styled.a`
  color: #333;
  background-color: #ff78ff;
  padding: 0 2px;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: #333;
    color: #ff78ff;
  }
`;

export default Link;

export const EmptyLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`;
