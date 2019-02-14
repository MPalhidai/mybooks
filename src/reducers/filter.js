import { initialState, CHANGE_FILTER, CREATE_CATEGORY } from '../actions/constants';

export const filterReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.filter === 'All') {
        return [...initialState.filters]
      } else {
        return [action.filter]
      }
    case CREATE_CATEGORY:
      return [...state, action.category].sort()
    default:
      return state;
  }
}
