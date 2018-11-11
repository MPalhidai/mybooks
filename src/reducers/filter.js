import { initialState, CHANGE_FILTER } from '../actions/constants';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.filter === 'All') { // possible way
        return {
          filter: state.filters
        }
      } else {
        return {
          filter: [action.filter]
        }
      }
    default:
      return state;
  }
}
