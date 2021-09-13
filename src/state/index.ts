import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer, { UserState } from './user';
import postReducer, { PostState } from './post';

const reducer = combineReducers({ user: userReducer, post: postReducer });

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export interface State {
  user: UserState;
  post: PostState;
}
