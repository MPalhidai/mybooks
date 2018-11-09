// store function actions for books
import { CREATE_BOOK, REMOVE_BOOK, GET_BOOKS } from '../actions/constants'

const initialState = {
  books: [
    {id: 1234, title: "abcd", category: 'Kids'},
    {id: 2345, title: "birds", category: 'Learning'},
    {id: 3456, title: "USA", category: 'History'}
  ]
}

export const bookReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [ action.createBook, ...state.books ]
       }
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter( book => book.id !== action.removeBook )
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
