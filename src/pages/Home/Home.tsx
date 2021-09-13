import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { State } from 'state';
import { PostItem } from 'state/post';
import { CurrentUser } from 'state/user';
import { FetchPostAction } from 'state/post';
import { AppContainer } from 'shared/components';

interface HomeProps {
  posts: PostItem[];
  currentUser?: CurrentUser;
}

const Home: React.FC<HomeProps> = ({ posts, currentUser }) => {
  const dispatch = useDispatch();
  const browserHistory = useHistory();
  useEffect(() => {
    !currentUser && browserHistory.push('/login');
    if (currentUser) {
      dispatch(FetchPostAction());
    } else {
      browserHistory.push('/login');
    }
  }, [currentUser, browserHistory, dispatch]);

  return (
    <AppContainer>
      {posts.map((item) => (
        <h1 key={item.author.id}>{item.author.username}</h1>
      ))}
    </AppContainer>
  );
};

const mapStateToProps = (state: State) => {
  return {
    posts: state.post.posts,
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, {})(Home);
