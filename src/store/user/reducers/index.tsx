import { Reducer } from 'redux';
import { UserActions } from '../actions';
import { RESET_USER, SET_USER } from '../actions/types';

interface IUserProfile {
  name: string | null;
  email: string | null;
  image: string | null;
}

export interface IUserState {
  userProfile: IUserProfile;
  token: string | null;
  tokenExpires: number | null;
  loaded: boolean;
}

const initialUserState: IUserState = {
  userProfile: {
    name: null,
    email: null,
    image: null
  },
  token: null,
  tokenExpires: null,
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
