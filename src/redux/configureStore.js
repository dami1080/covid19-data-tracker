import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from './contries/countries';

const reducer = combineReducers({
  countriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
