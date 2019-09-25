import * as React from "react";
import styled from "styled-components";

const StyledCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Center: React.FC = props => <StyledCenter>{props.children}</StyledCenter>;

export default Center;
