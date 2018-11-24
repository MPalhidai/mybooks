import { combineReducers } from 'redux';
import { bookReducer } from './books';
import { commentReducer } from './comments';
import { filterReducer } from './filter';

export const rootReducer = combineReducers({
  inventory: bookReducer,
  opinions: commentReducer,
  categories: filterReducer
});
