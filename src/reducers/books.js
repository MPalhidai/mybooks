import {
  initialState,
  SET_BOOKS,
  CREATE_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK
} from '../actions/constants';


export const bookReducer = ( state = initialState.books, action ) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.books
    case CREATE_BOOK:
      return [ ...state, action.book ]
    case REMOVE_BOOK:
      return state.filter( book => book.id !== action.id )
    case EDIT_BOOK:
      const index = state.findIndex(book => book.id === action.book.id)
      return [ ...state.slice(0, index), action.book, ...state.slice(index+1) ]
    default:
      return state
  }
}
