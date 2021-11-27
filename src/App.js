import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App text-light">

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/details/:name" component={Details} />
      </Switch>

    </div>
  );
}

export default App;
