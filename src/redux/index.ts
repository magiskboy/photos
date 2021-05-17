import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function reducer(state: any = [], action: { type: string; payload: any }) {
  return state;
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export { store };
