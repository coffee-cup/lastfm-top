import { createModel } from "@prodo/core";
import loggerPlugin from "@prodo/logger";
import routePlugin from "@prodo/route";
import localPlugin from "@prodo/local";
import { Album, User } from "./types";

export type Period = "7day" | "1month" | "12month" | "overall";

export interface State {
  username: string;
  users: { [name: string]: User };
  albums: {
    [period: string]: {
      [name: string]: Album[];
    };
  };
}

export interface Local {
  selectedPeriod: Period;
}

export const model = createModel<State>()
  .with(routePlugin)
  .with(localPlugin<Local>())
  .with(loggerPlugin);

export const { state, watch, dispatch, local } = model.ctx;
