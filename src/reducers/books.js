import {
  initialState,
  CREATE_BOOK,
  REMOVE_BOOK,
  GET_BOOKS
} from '../actions/constants';


export const bookReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [ action.book, ...state.books ]
       }
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter( book => book.id !== action.id )
      }
    case GET_BOOKS:
      return {
        ...state,
        books: [...state.books]
      }
    default:
      return state
  }
}
