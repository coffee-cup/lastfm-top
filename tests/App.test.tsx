import { render } from "@testing-library/react";
import * as React from "react";
import App from "../src/App";
import { model } from "../src/model";

test("can render App without crashing", async () => {
  const { Provider } = model.createStore({ initState: {} });

  const { container } = render(
    <Provider>
      <App />
    </Provider>,
  );

  expect(container.textContent).toBe("Hello World");
});
