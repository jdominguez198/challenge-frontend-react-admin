import { Reducer } from 'redux';
import { UserActions } from '../actions';
import { RESET_USER, SET_USER } from '../actions/types';

interface IUserProfile {
  name: string | undefined;
  email: string | undefined;
  image: string | undefined;
}

export interface IUserState {
  userProfile: IUserProfile;
  token: string | undefined;
  tokenExpires: number | undefined;
  loaded: boolean;
}

const initialUserState: IUserState = {
  userProfile: {
    name: undefined,
    email: undefined,
    image: undefined
  },
  token: undefined,
  tokenExpires: undefined,
  loaded: false
};

export const UserState: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userProfile: {
          name: action.payload.name,
          email: action.payload.email,
          image: action.payload.image,
        },
        token: action.payload.token,
        tokenExpires: action.payload.tokenExpires
      }
    case RESET_USER:
      return {
        ...state,
        ...initialUserState
      }
    default:
      return state;
  }
};
