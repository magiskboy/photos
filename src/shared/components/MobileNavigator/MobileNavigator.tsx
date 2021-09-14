import React from 'react';
import { BottomNavigation, BottomNavigationAction, Badge } from '@material-ui/core';
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
      <BottomNavigationAction value="/" icon={<HomeIcon />} showLabel={false} />
      <BottomNavigationAction
        value="/notification"
        showLabel={false}
        icon={
          <Badge badgeContent={3} color="primary">
            <NotificationsIcon />
          </Badge>
        }
      />
      <BottomNavigationAction showLabel={false} value="/account" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default MobileNavigator;
