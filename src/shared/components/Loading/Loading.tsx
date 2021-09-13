import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ children, loading }) => {
  const classes = useStyles();
  return (
    <div>
      {children}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" className={classes.circle} />
      </Backdrop>
    </div>
  );
};

export default Loading;
