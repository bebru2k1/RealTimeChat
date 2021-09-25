import React from "react";
import { Route, Redirect } from "react-router";
import { useAppSelector } from "../app/hooks";
import { authSelector } from "../features/AuthSlice";

function ProtectedRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated } = useAppSelector(authSelector);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </div>
  );
}

export default ProtectedRoute;
