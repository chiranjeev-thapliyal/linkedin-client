import { useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/views/Home/Header';
import Home from '../components/views/Home/Home';
import Notification from '../components/views/Notification/Notification';
import Profile from '../components/views/Profile/Profile';
import { NetworksPage } from '../components/views/Network/NetworksPage';
import { JoinNowPage } from '../components/views/Signup/JoinNowPage';
import { Signup } from '../components/views/Signup/Signup';
import { AuthContext } from '../Contexts/AuthContextProvider';
import PrivateRoute from './PrivateRoute';
import Messenger from '../components/views/Messenger/Messenger';

export const Routes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div>
      <Switch>
        <PrivateRoute exact={true} path='/home'>
          <Home />
        </PrivateRoute>
        <PrivateRoute exact={true} path='/notification'>
          <Notification />
        </PrivateRoute>
        <PrivateRoute exact={true} path='/profile'>
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact={true} path='/my-networks'>
          <NetworksPage />
        </PrivateRoute>
        <Route exact path='/login'>
          <JoinNowPage />
        </Route>
        <Route exact path='/register'>
          <Signup />
        </Route>
        <PrivateRoute path="/profile/:userID">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path='/' />
      </Switch>
      {isAuth && <Messenger />}
    </div>
  );
};
