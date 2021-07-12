import { Reducer } from 'redux';
import { DummyActions } from '../actions';
import { SET_DASHBOARD_ITEMS, SET_SETTINGS_ITEMS } from '../actions/types';

export interface IDummyState {
  dashboardItems: any;
  settingsItems: any;
}

const initialDummyState: IDummyState = {
  dashboardItems: [],
  settingsItems: []
};

export const DummyState: Reducer<IDummyState, DummyActions> = (
  state = initialDummyState,
  action
) => {
  switch (action.type) {
    case SET_DASHBOARD_ITEMS:
      return {
        ...state,
        dashboardItems: [ ...action.payload ]
      };
    case SET_SETTINGS_ITEMS:
      return {
        ...state,
        settingsItems: [ ...action.payload ]
      };
    default:
      return state;
  }
};
