import React, { ReactNode } from 'react';
import {  Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';


type TProtectedRouteProps = {
    children: ReactNode,
    path: string,
    exact: boolean,
}


export const ProtectedRoute = ({ children, ...rest }: TProtectedRouteProps) => {

    const { isAuth } = useSelector((state: any) => state.login);

  return (
      <Route
          {...rest}
          render={({ location }) =>
          isAuth ? (
                  children
              ) : (
                  <Redirect to={{ pathname: "/login", state: { from: location } }} />
              )
          }
      />
  );
}
