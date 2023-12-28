import { createStore, applyMiddleware } from 'redux';
import blogReducer from './BlogReducer';
import localStorageMiddleware from './LocalStorageMiddleware';

export const store = createStore(
  blogReducer,
  applyMiddleware(localStorageMiddleware)
);

