import './css/App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Statistics from './components/Statistics';
import About from './components/About';

import { 
  BrowserRouter as Router,
  Route, 
  Switch 
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
