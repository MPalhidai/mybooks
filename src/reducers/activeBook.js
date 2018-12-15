import {
  initialState,
  SET_BOOK,
  CHANGE_BOOK
} from '../actions/constants';


export const activeBookReducer = ( state = initialState.book, action ) => {
  switch (action.type) {
    case SET_BOOK:
    case CHANGE_BOOK:
      return action.book
    default:
      return state
  }
}
