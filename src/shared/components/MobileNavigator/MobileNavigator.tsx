import React from 'react';
import { BottomNavigation, BottomNavigationAction, Badge } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Add as AddIcon,
} from '@material-ui/icons';

const MobileNavigator: React.FC = () => {
  const browserHistory = useHistory();
  const handleChange = (event: React.ChangeEvent<any>, newValue: string) => {
    browserHistory.push(newValue);
  };
  return (
    <BottomNavigation onChange={handleChange} value={browserHistory.location.pathname}>
      <BottomNavigationAction value="/" icon={<HomeIcon />} />
      <BottomNavigationAction value="/addPost" icon={<AddIcon />} />
      <BottomNavigationAction
        value="/notification"
        icon={
          <Badge badgeContent={3} color="primary">
            <NotificationsIcon />
          </Badge>
        }
      />
      <BottomNavigationAction value="/account" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default MobileNavigator;
