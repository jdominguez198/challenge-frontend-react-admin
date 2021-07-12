import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { IUserState, UserState } from './user/reducers';
import { IUiState, UiState } from './ui/reducers';
import { IDummyState, DummyState } from './dummy/reducers';
import { loadState, saveState } from '../utils/stateManager';

export interface IAppState {
  user: IUserState,
  ui: IUiState,
  dummy: IDummyState
}

const rootReducer = combineReducers<IAppState>({
  user: UserState,
  ui: UiState,
  dummy: DummyState
});

const initialState = loadState();

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  store.subscribe(() => saveState(store.getState()))

  return store;
}
