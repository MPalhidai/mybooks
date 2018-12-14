import { initialState, CHANGE_FILTER } from '../actions/constants';

export const filterReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.filter === 'All') {
        return [...initialState.filters]
      } else {
        return [action.filter]
      }
    default:
      return state;
  }
}
