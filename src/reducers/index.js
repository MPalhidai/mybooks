import { combineReducers } from 'redux';
import { bookReducer } from './books';
import { filterReducer } from './filter';

export const rootReducer = combineReducers({
  inventory: bookReducer,
  categories: filterReducer
});
