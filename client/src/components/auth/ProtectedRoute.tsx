import React from "react";
import { Route, RouteComponentProps } from 'react-router-dom'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from './Loading';

type Props = {
  component: React.ComponentType<RouteComponentProps>,
  path: string
}

const ProtectedRoute: React.FC<Props> = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;