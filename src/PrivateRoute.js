import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthenticated from './components/auth';

const PrivateRoute = ({ path, element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" />;
  }

  return <Route path={path} element={element} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
