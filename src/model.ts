import { createModel } from "@prodo/core";
import loggerPlugin from "@prodo/logger";
import routePlugin from "@prodo/route";
import { Album, User } from "./types";

export interface State {
  username: string;
  users: { [name: string]: User };
  albums: { [name: string]: Album[] };
}

export const model = createModel<State>()
  .with(routePlugin)
  .with(loggerPlugin);

export const { state, watch, dispatch } = model.ctx;
