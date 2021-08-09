import './css/App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Statistics from './components/Statistics';
import Profile from './components/Profile';
import Loading from './components/auth/Loading';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <ProtectedRoute path="/statistics" component={Statistics} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/about" component={About} />
        </Switch>
    </>
  );
}

export default App;
