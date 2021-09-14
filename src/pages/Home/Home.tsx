import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { State } from 'state';
import { PostItem as PostItemModel, FetchPostAction, SetLikedPostAction } from 'state/post';
import { CurrentUser } from 'state/user';
import { AppContainer, PostItem } from 'shared/components';

interface HomeProps {
  posts: PostItemModel[];
  currentUser?: CurrentUser;
}

const Home: React.FC<HomeProps> = ({ posts, currentUser }) => {
  const dispatch = useDispatch();
  const browserHistory = useHistory();
  React.useEffect(() => {
    !currentUser && browserHistory.push('/login');
    if (currentUser) {
      dispatch(FetchPostAction());
    } else {
      browserHistory.push('/login');
    }
  }, [currentUser, browserHistory, dispatch]);

  const handleLikePostItemClick = React.useCallback(
    (post: PostItemModel) => {
      return () => {
        dispatch(SetLikedPostAction(currentUser as CurrentUser, post));
      };
    },
    [currentUser, dispatch],
  );

  const handleCommentPostItem = React.useCallback((value: string) => {
    console.log(value);
  }, []);

  return currentUser ? (
    <AppContainer currentUser={currentUser}>
      {posts.map((item, idx) => (
        <PostItem
          key={idx}
          data={item}
          currentUser={currentUser}
          onLikeClicked={handleLikePostItemClick(item)}
          onComment={handleCommentPostItem}
        />
      ))}
    </AppContainer>
  ) : null;
};

const mapStateToProps = (state: State) => {
  return {
    posts: state.post.posts,
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, {})(Home);
