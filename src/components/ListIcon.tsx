import * as React from "react";
import styled from "styled-components";

const StyledListIcon = styled.div`
  padding-left: 0.5rem;
  cursor: pointer;

  div {
    width: 18px;
    height: 3px;
    background-color: #333;
    margin: 2px 0;

    transition: all 150ms ease-in-out;
  }

  &:hover {
    div {
      background-color: #ff78ff;
    }
  }
`;

const ListIcon: React.FC<{ onClick: () => void }> = props => (
  <StyledListIcon onClick={props.onClick}>
    <div />
    <div />
    <div />
  </StyledListIcon>
);

export default ListIcon;
