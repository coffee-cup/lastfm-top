import * as React from "react";
import styled from "styled-components";

export interface Option {
  value: string;
  id: string;
}

export interface Props {
  selected: string;
  options: Option[];
  onChange: (id: string) => void;
}

const Tab = styled.div<{ selected: boolean }>`
  border: solid 1px #333;
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  border-color: ${props => (props.selected ? "#ff78ff" : "inherit")};
  color: ${props => (props.selected ? "#ff78ff" : "inherit")};

  & ~ & {
    margin-left: 0.5rem;
  }

  &:hover {
    border-color: #ff78ff;
    color: #ff78ff;
  }
`;

const StyledTabs = styled.div`
  display: flex;
`;

const Tabs: React.FC<Props> = props => (
  <StyledTabs>
    {props.options.map(o => (
      <Tab
        key={o.id}
        onClick={() => props.onChange(o.id)}
        selected={props.selected === o.id}
      >
        {o.value}
      </Tab>
    ))}
  </StyledTabs>
);

export default Tabs;
