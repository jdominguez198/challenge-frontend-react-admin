import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { SET_DASHBOARD_ITEMS, SET_SETTINGS_ITEMS } from './types';
import { IDummyState } from '../reducers';
import globalConfig from '../../../config';

export interface IDummyAction {
  type: string,
  payload: any
}

export type DummyActions = IDummyAction;

const setDashboardItems = (items: any) => ({
  type: SET_DASHBOARD_ITEMS,
  payload: items
});

const setSettingsItems = (items: any) => ({
  type: SET_SETTINGS_ITEMS,
  payload: items
});

export const fetchDashboardItems: ActionCreator<ThunkAction<Promise<any>, IDummyState, null, IDummyAction>> = () => {
  return async (dispatch: Dispatch) => {
    const url = `${globalConfig.dummyApi.baseUrl}/${globalConfig.dummyApi.endpoints.dashboard}`;

    try {
      const response = await axios.get(url);

      if (!response.data || !response.data.results || !response.data.results.length) {
        return dispatch(setDashboardItems([]));
      }

      const items = response.data.results.map((item: any) => ({
        id: item.id,
        name: item.name,
        image: item.image
      }));

      return dispatch(setDashboardItems(items));
    } catch (error) {
      console.error('Fetch Dashboard Items error: ', error);
    }
  }
};

export const fetchSettingsItems: ActionCreator<ThunkAction<Promise<any>, IDummyState, null, IDummyAction>> = () => {
  return async (dispatch: Dispatch) => {
    const url = `${globalConfig.dummyApi.baseUrl}/${globalConfig.dummyApi.endpoints.settings}`;

    try {
      const response = await axios.get(url);

      if (!response.data || !response.data.results || !response.data.results.length) {
        return dispatch(setSettingsItems([]));
      }

      const items = response.data.results.map((item: any) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        dimension: item.dimension
      }));

      return dispatch(setSettingsItems(items));
    } catch (error) {
      console.error('Fetch Settings Items error: ', error);
    }
  }
};
