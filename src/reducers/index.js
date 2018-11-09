// combine all reducers

import { combineReducers } from 'redux';
import { bookReducer } from './books';

export default combineReducers({
  inventory: bookReducer
});
