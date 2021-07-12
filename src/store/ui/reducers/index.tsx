import { Reducer } from 'redux';
import { SET_DRAWER_OPEN } from '../actions/types';
import { UiActions } from '../actions';

export interface IUiState {
  drawerPanelOpen: boolean
}

const initialUiState: IUiState = {
  drawerPanelOpen: false
};

export const UiState: Reducer<IUiState, UiActions> = (
  state = initialUiState,
  action
) => {
  switch (action.type) {
    case SET_DRAWER_OPEN:
      return {
        ...state,
        drawerPanelOpen: action.payload
      };
    default:
      return state;
  }
}
