import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppContainer } from 'shared/components';
import { connect } from 'react-redux';
import { State } from 'state';
import { CurrentUser } from 'state/user';

interface AccountProps {
  currentUser?: CurrentUser;
}

const Account: React.FC<AccountProps> = ({ currentUser }) => {
  const browserHistory = useHistory();
  React.useEffect(() => {
    if (!currentUser) {
      browserHistory.push('/login');
    }
  }, [browserHistory, currentUser]);
  return currentUser ? <AppContainer currentUser={currentUser}>Account</AppContainer> : null;
};

const mapStateToProps = (state: State) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {})(Account);
