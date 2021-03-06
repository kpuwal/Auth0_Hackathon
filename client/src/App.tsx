import Navigation from './components/Navigation';
import Main from './components/Main';
import Statistics from './components/Statistics';
import Profile from './components/Profile';
import About from './components/About';

import ProtectedRoute from './components/auth/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <ProtectedRoute path="/statistics" component={Statistics} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </>
  );
}

export default App;
