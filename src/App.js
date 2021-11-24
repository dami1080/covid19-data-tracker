import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Details from './components/Details';
import { loadContinent } from './redux/contries/countries';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContinent());
  }, [dispatch]);

  return (
    <div className="App text-light">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
