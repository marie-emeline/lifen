import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Map, fromJS } from 'immutable';
import { createBrowserHistory } from 'history';

import { loadState, saveState } from '../helpers/localStorage';

import rootReducer from '../reducers';
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();

export let history = null;

const enhancers = [];
const middleware = [thunk, sagaMiddleware];

if (typeof window !== 'undefined') {
  history = createBrowserHistory();
  middleware.push(routerMiddleware(history));
}

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers,
);

const configureStore = (initialServerState = {}) => {
  const persistedState = loadState();
  const formattedProps = {};

  Object.keys(initialServerState).forEach(key => {
    formattedProps[key] = fromJS(initialServerState[key]);
  });

  const initialState = Map({
    ...persistedState,
    ...formattedProps,
  });

  const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers,
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
