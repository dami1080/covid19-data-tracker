import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import store from '../redux/configureStore';

const LOAD_CONTINENT = 'covid-19-data-tracker/details/LOAD_CONTINENT';
store.dispatch({
  type: LOAD_CONTINENT,
  payload: [
    {
      All: {
        confirmed: '204900',
        recovered: '0',
        deaths: '5862',
        country: 'Algeria',
      },
    },
    {
      All: {
        confirmed: '2222',
        recovered: '0',
        deaths: '5862',
        country: 'Morocco',
      },
    },
  ],
});

describe('Home page', () => {
  test('mock redux store test', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    screen.debug();
    expect(screen.queryByText(/Morocco/)).toBeInTheDocument();
  });
});
