import React, { lazy, Suspense } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import { Loading } from 'shared/components';
import { store } from 'state';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const Account = lazy(() => import('pages/Account'));
const Notification = lazy(() => import('pages/Notification'));

// eslint-disable-next-line
const routes: Array<{ component: any; path: string; exact: boolean }> = [
  { component: Home, path: '/', exact: true },
  { component: Account, path: '/account', exact: true },
  { component: Notification, path: '/notification', exact: true },
  { component: Login, path: '/login', exact: true },
  { component: SignUp, path: '/signup', exact: true },
];

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading loading />}>
          <BrowserRouter>
            <Switch>
              {routes.map(({ component, path, exact }) => (
                <Route key={path} component={component} path={path} exact={exact} />
              ))}
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
