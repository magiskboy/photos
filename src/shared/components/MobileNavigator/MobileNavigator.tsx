import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@material-ui/icons';

const MobileNavigator: React.FC = () => {
  const browserHistory = useHistory();
  const handleChange = (event: React.ChangeEvent<any>, newValue: string) => {
    browserHistory.push(newValue);
  };
  return (
    <BottomNavigation onChange={handleChange} value={browserHistory.location.pathname}>
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Notification"
        value="/notification"
        icon={<NotificationsIcon />}
      />
      <BottomNavigationAction label="Account" value="/account" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default MobileNavigator;
