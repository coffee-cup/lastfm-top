import * as React from "react";
import styled from "styled-components";
import { Search } from "../components/Form";
import { state, watch, dispatch } from "../model";
import { push } from "@prodo/route";
import Link from "../components/Link";

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 4em;
`;

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const setUsername = (username: string) => {
  state.username = username;
};

const Home = () => {
  const username = watch(state.username);

  return (
    <StyledHome>
      <div>
        <Title>Your Top Albums</Title>
        <p>
          Enter your <Link href="https://www.last.fm/home">last.fm</Link>{" "}
          username to see your top albums.
        </p>
        <Search
          placeholder="Your last.fm username"
          onChange={dispatch(setUsername)}
          value={username}
          onSubmit={() => dispatch(push)(`/${username}`)}
        />
      </div>
    </StyledHome>
  );
};

export default Home;
