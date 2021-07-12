import { SET_USER, RESET_USER } from './types';

export interface IUserAction {
  type: string,
  payload: any
}

export type UserActions = IUserAction;

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user
});

export const resetUser = () => ({
  type: RESET_USER
});
