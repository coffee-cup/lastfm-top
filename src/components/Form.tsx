import * as React from "react";
import styled from "styled-components";

export const Input = styled.input`
  apperance: none;
  font-size: 1.2em;
  padding: 1rem 1rem;
  border: solid 2px black;
  border-radius: 2px;
  width: 100%;
`;

export const Button = styled.button`
  apperance: none;
  padding: 0 1rem;
  border: solid 2px black;
  background-color: cyan;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;

  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #ff78ff;
  }
`;

const StyledSearch = styled.form`
  display: flex;

  button {
    margin-left: -2px;
  }
`;

export const Search: React.FC<{
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}> = props => (
  <StyledSearch
    onSubmit={e => {
      e.preventDefault();
      props.onSubmit();
    }}
  >
    <Input
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
    <Button>Go</Button>
  </StyledSearch>
);
