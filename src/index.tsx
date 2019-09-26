import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { model } from "./model";
import { createBrowserHistory } from "history";

import "./styles.scss";

const history = createBrowserHistory();

const { Provider } = model.createStore({
  logger: true,
  initState: {
    username: "",
    selectedPeriod: "7day",
    users: {},
    albums: {},
  },
  route: {
    history,
  },
});

const render = () => {
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById("root"),
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}

render();
