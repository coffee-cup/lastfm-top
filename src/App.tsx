import * as React from "react";
import styled from "styled-components";
import * as actions from "./actions";
import { Switch, Route } from "@prodo/route";
import { state, watch, dispatch } from "./model";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const Container = styled.div`
  max-width: 600px;
  padding: 0 2rem;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:username" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default App;
