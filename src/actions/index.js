// define all redux actions
import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, GET_BOOKS,  } from './constants';

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

export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    filter: filter
  }
}

export const getBooks = () => {
  return {
    type: GET_BOOKS
  }
}
