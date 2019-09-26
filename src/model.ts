import { createModel } from "@prodo/core";
import loggerPlugin from "@prodo/logger";
import routePlugin from "@prodo/route";
import { Album, User } from "./types";

export type Period = "7day" | "1month" | "12month" | "overall";

export interface State {
  username: string;
  selectedPeriod: Period;
  users: { [name: string]: User };
  albums: {
    [period: string]: {
      [name: string]: Album[];
    };
  };
}

export const model = createModel<State>()
  .with(routePlugin)
  .with(loggerPlugin);

export const { state, watch, dispatch } = model.ctx;
