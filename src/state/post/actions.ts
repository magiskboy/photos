import { Dispatch } from 'redux';
import { fetchPostsForNewFeed } from 'services/post';
import { PostItem } from './interfaces';
import { IAction } from 'state/interfaces';

export const POST_APPEND_POSTS = 'POST_SET_POSTS';
export const AppendPostsAction = (posts: PostItem[]): IAction<PostItem[]> => {
  return {
    type: POST_APPEND_POSTS,
    payload: posts,
  };
};

export const FetchPostAction = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const newPosts = await fetchPostsForNewFeed();
    dispatch(AppendPostsAction(newPosts));
  };
};
