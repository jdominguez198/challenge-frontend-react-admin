import { combineReducers, createStore, Store } from 'redux';
import { IUserState, UserState } from './user/reducers';
import { loadState, saveState } from '../utils/stateManager';

export interface IAppState {
  user: IUserState
}

const rootReducer = combineReducers<IAppState>({
  user: UserState
});

const initialState = loadState();

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, initialState);
  store.subscribe(() => saveState(store.getState()))

  return store;
}
