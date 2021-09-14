import React from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar, Typography, Badge, IconButton, Avatar, InputBase } from '@material-ui/core';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@material-ui/icons';
import { CurrentUser } from 'state/user';
import useStyles from './styles';

interface DesktopNavigatorProps {
  currentUser: CurrentUser;
}
const DesktopNavigator: React.FC<DesktopNavigatorProps> = ({ currentUser }) => {
  const classes = useStyles();
  const browserHistory = useHistory();

  const handleAvatarClicked = () => {
    browserHistory.push('/account');
  };

  return (
    <Toolbar className={classes.grow}>
      <Typography
        variant="h6"
        noWrap
        className={classes.title}
        onClick={() => browserHistory.push('/')}
      >
        Photos
      </Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div>
        <IconButton className={classes.icon}>
          <Badge badgeContent={2} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={handleAvatarClicked}>
          <Avatar src={currentUser.profileUrl} />
        </IconButton>
      </div>
    </Toolbar>
  );
};

export default DesktopNavigator;
