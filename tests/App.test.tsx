import { render } from "@testing-library/react";
import * as React from "react";
import App from "../src/App";
import { model } from "../src/model";
import { createMemoryHistory } from "history";

test("can render App without crashing", async () => {
  const history = createMemoryHistory();
  const { Provider } = model.createStore({
    initState: {
      username: "",
      users: {},
      albums: {},
    },
    route: {
      history,
    },
  });

  const { container } = render(
    <Provider>
      <App />
    </Provider>,
  );
});
