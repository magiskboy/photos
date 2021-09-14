import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppContainer } from 'shared/components';
import { connect } from 'react-redux';
import { State } from 'state';
import { CurrentUser } from 'state/user';

interface NotificationProps {
  currentUser?: CurrentUser;
}

const Notification: React.FC<NotificationProps> = ({ currentUser }) => {
  const browserHistory = useHistory();
  React.useEffect(() => {
    if (!currentUser) {
      browserHistory.push('/login');
    }
  }, [browserHistory, currentUser]);
  return currentUser ? <AppContainer currentUser={currentUser}>Notification</AppContainer> : null;
};

const mapStateToProps = (state: State) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {})(Notification);
