import { initialState, CHANGE_FILTER } from '../actions/constants';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: [action.filter]
      }
    default:
      return state.filters;
  }
}
