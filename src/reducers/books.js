import {
  initialState,
  SET_BOOKS,
  CREATE_BOOK,
  REMOVE_BOOK,
  SET_BOOK,
  EDIT_BOOK
} from '../actions/constants';


export const bookReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        books: action.books
       }
    case CREATE_BOOK:
      return {
        books: [ ...state.books, action.book ]
       }
    case REMOVE_BOOK:
      return {
        books: state.books.filter( book => book.id !== action.id )
      }
    case SET_BOOK:
      return {
        book: action.book
      }
    case EDIT_BOOK:
      const index = state.books.findIndex(book => book.id === action.book.id)
      return {
        books: [
          ...state.slice(0, index),
          action.book,
          ...state.slice(index+1)
        ]
      }
    default:
      return state
  }
}
