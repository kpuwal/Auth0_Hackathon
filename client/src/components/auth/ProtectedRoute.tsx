import React from "react";
import { Route, RouteComponentProps } from 'react-router-dom'
import { withAuthenticationRequired } from "@auth0/auth0-react";

type Props = {
  component: React.ComponentType<RouteComponentProps>,
  path: string
}

const ProtectedRoute: React.FC<Props> = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <div>Loading...</div>,
    })}
    {...args}
  />
);

export default ProtectedRoute;
