import { POST_APPEND_POSTS, POST_SET_POSTS, POST_SET_LIKED_POST } from './actions';
import { IAction } from 'state/interfaces';
import { PostState, PostItem } from './interfaces';
import { CurrentUser } from '../user';

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

const doSetLikedPost = (
  state: PostState,
  { user, post }: { user: CurrentUser; post: PostItem },
): PostState => {
  const isLiked = post.likes.find((item) => item.userLiked.id === user.id);
  state.posts = state.posts.map((item) => {
    if (item.id === post.id) {
      if (isLiked) {
        return {
          ...item,
          totalLikes: item.totalLikes - 1,
          likes: item.likes.filter((el) => el.userLiked.id != user.id),
        };
      }
      return {
        ...item,
        totalLikes: item.totalLikes + 1,
        likes: [...item.likes, { userLiked: { id: user.id, username: user.username } }],
      };
    }
    return item;
  });
  return {
    ...state,
  };
};

// eslint-disable-next-line
const reducer = (state = initialState, { type, payload }: IAction<any>): PostState => {
  switch (type) {
    case POST_APPEND_POSTS:
      return doAppendPosts(state, payload);
    case POST_SET_POSTS:
      return doSetPosts(state, payload);
    case POST_SET_LIKED_POST:
      return doSetLikedPost(state, payload);
    default:
      return state;
  }
};

export default reducer;
