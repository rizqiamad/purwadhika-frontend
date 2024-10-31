import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface IProtectedRoute {
  isRegistered: boolean
  children: ReactElement
}

const ProtectedRoute = ({ isRegistered, children }:IProtectedRoute) => {
  return isRegistered ? children : <Navigate to="/register" replace />;
};

export default ProtectedRoute;
