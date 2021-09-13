import React, { lazy, Suspense } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { store } from 'state';
import { Loading } from 'shared/components';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));

// eslint-disable-next-line
const routes: Array<{ component: any; path: string; exact: boolean }> = [
  { component: Home, path: '/', exact: true },
  { component: Login, path: '/login', exact: true },
  { component: SignUp, path: '/signup', exact: true },
];

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
};

export default App;
