import React, { ReactNode } from 'react';
import {  Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from '../../services/hooks/hooks';


export const ProtectedRoute = ({ children, ...rest }: RouteProps & {children?: ReactNode}) => {

    const { isAuth } = useSelector((state) => state.login);

  return (
      <Route
          {...rest}
          render={location =>
          isAuth ? (
                  children
              ) : (
                  <Redirect to={{ pathname: "/login", state: { from: location } }} />
              )
          }
      />
  );
}
