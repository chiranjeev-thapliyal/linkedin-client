import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/views/Home/Header';
import { AuthContext } from '../Contexts/AuthContextProvider';

const PrivateRoute = ({ exact, path, children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    if (path === '/login') {
      return <Redirect to='/login' />;
    } else return <Redirect to='/register' />;
  }

  if (isAuth && (path === '/login' || path === '/register' || path === '/')) {
    return <Redirect to='/home' />;
  }

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route path={path} exact={exact}>
      {isAuth && <Header />}
      {children}
    </Route>
  );
};

export default PrivateRoute;
