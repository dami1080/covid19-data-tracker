import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadContinent, countriesReducer } from './countries/countries';

const reducer = combineReducers({
  countriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
store.dispatch(loadContinent());

export default store;
