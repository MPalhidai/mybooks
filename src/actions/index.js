// define all redux actions
import { CREATE_BOOK, REMOVE_BOOK, GET_BOOKS } from './constants';

export const createBook = book => {
  return {
    type: CREATE_BOOK,
    book: book
  }
}

export const removeBook = id => {
  return {
    type: REMOVE_BOOK,
    id: id
  }
}

export const getBooks = () => {
  return {
    type: GET_BOOKS
  }
}
