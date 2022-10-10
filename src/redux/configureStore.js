import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from './contries/countries';

const rootReducer = combineReducers({
  countries: countriesReducer,

});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['getCountries//fulfilled'],
    },
  }).concat(logger),
});

export default store;
