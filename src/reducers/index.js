import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth'
import { bookReducer } from './books';
import { commentReducer } from './comments';
import { filterReducer } from './filter';
import { activeBookReducer } from './activeBook';

export const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  inventory: bookReducer,
  opinions: commentReducer,
  categories: filterReducer,
  activeBook: activeBookReducer
});
