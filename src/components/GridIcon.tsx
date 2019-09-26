import * as React from "react";
import styled from "styled-components";

const StyledGridIcon = styled.div`
  width: 24px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.5rem;
  cursor: pointer;

  div {
    width: 6px;
    height: 6px;
    background-color: #333;
    margin: 1px;

    transition: all 150ms ease-in-out;
  }

  &:hover {
    div {
      background-color: #ff78ff;
    }
  }
`;

const GridIcon: React.FC<{ onClick: () => void }> = props => (
  <StyledGridIcon onClick={props.onClick}>
    <div />
    <div />
    <div />
    <div />
  </StyledGridIcon>
);

export default GridIcon;
