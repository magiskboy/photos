import React from 'react';
import { AppBar, Container } from '@material-ui/core';
import { DesktopNavigator, MobileNavigator } from 'shared/components';
import { useDeviceDetection, ScreenSize } from 'shared/hooks/ui';
import { CurrentUser } from 'state/user';
import useStyle from './styles';

interface AppContainerProps {
  currentUser: CurrentUser;
}
const AppContainer: React.FC<AppContainerProps> = ({ children, currentUser }) => {
  const { size: screenSize } = useDeviceDetection();
  const mobileDevice = screenSize <= ScreenSize.TABLET;
  const classes = useStyle();

  return (
    <>
      <AppBar position={mobileDevice ? 'fixed' : 'static'} className={classes.root}>
        {!mobileDevice && <DesktopNavigator currentUser={currentUser} />}
        {mobileDevice && <MobileNavigator />}
      </AppBar>
      <Container maxWidth="md" disableGutters={mobileDevice}>
        <>{children}</>
      </Container>
      {mobileDevice && <div className={classes.container}></div>}
    </>
  );
};

export default AppContainer;
