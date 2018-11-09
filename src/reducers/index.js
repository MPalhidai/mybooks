// combine all reducers

// import { combineReducers } from 'redux';
import { bookReducer } from './books';

// export const Reducers = combineReducers({
//   inventory: bookReducer,
// });

export const Reducers = bookReducer;
