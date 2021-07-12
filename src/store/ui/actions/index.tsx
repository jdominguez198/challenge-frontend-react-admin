import {SET_DRAWER_OPEN} from "./types";

export interface IUiAction {
  type: string,
  payload: any
}

export type UiActions = IUiAction;

export const setDrawerPanelOpen = (open: boolean) => ({
  type: SET_DRAWER_OPEN,
  payload: open
});
