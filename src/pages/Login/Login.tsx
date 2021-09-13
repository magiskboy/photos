import React, { useState, useEffect } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { Copyright, Loading, Link } from 'shared/components';
import useStyles from './styles';
import { State } from 'state';
import { LoginAction, UserState } from 'state/user';

interface LoginProps {
  userState: UserState;
}

const Login: React.FC<LoginProps> = ({ userState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const browserHistory = useHistory();

  useEffect(() => {
    if (userState.currentUser) {
      browserHistory.push('/');
    }
  }, [userState, browserHistory]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      dispatch(LoginAction({ email, password }));
    } finally {
      setLoading(false);
    }
  };

  const classes = useStyles();
  return (
    <Loading loading={loading}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Loading>
  );
};

const mapStateToProps = (state: State) => {
  return {
    userState: state.user,
  };
};

export default connect(mapStateToProps, {})(Login);
