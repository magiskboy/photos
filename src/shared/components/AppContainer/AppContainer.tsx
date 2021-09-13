import React from 'react';
import { useHistory } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, AppBar } from '@material-ui/core';
import { Home, Notifications, Settings } from '@material-ui/icons';
import { useDeviceDetection, ScreenSize } from 'shared/hooks/ui';
import useStyle from './styles';

const AppContainer: React.FC = ({ children }) => {
  const browserHistory = useHistory();
  const { size: screenSize } = useDeviceDetection();
  const style = useStyle();
  const handleBottomNavigatorChange = (ev: React.ChangeEvent<any>, newValue: string) => {
    console.log(newValue);
    browserHistory.push(newValue);
  };

  return (
    <AppBar position="fixed" className={style.root}>
      {children}
      {screenSize <= ScreenSize.TABLET && (
        <BottomNavigation onChange={handleBottomNavigatorChange}>
          <BottomNavigationAction label="Home" value="/" icon={<Home />} />
          <BottomNavigationAction
            label="Notification"
            value="/notification"
            icon={<Notifications />}
          />
          <BottomNavigationAction label="Setting" value="/account" icon={<Settings />} />
        </BottomNavigation>
      )}
    </AppBar>
  );
};

export default AppContainer;
