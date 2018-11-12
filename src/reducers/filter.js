import { initialState, CHANGE_FILTER } from '../actions/constants';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.filter === 'All') {
        return {
          filters: [...initialState.filters]
        }
      } else {
        return {
          filters: [action.filter]
        }
      }
    default:
      return state;
  }
}
