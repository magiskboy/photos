import { POST_APPEND_POSTS, POST_SET_POSTS } from './actions';
import { IAction } from 'state/interfaces';
import { PostState, PostItem } from './interfaces';

const initialState: PostState = {
  posts: [],
};

const doAppendPosts = (state: PostState, posts: PostItem[]): PostState => {
  return {
    ...state,
    posts: [...state.posts, ...posts],
  };
};

const doSetPosts = (state: PostState, posts: PostItem[]): PostState => {
  return {
    ...state,
    posts,
  };
};

// eslint-disable-next-line
const reducer = (state = initialState, { type, payload }: IAction<any>): PostState => {
  switch (type) {
    case POST_APPEND_POSTS:
      return doAppendPosts(state, payload as PostItem[]);
    case POST_SET_POSTS:
      return doSetPosts(state, payload as PostItem[]);
    default:
      return state;
  }
};

export default reducer;
