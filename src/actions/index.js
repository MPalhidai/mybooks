// define all redux actions
import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, GET_BOOK, CREATE_COMMENT } from './constants';

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

export const getBook = id => {
  return {
    type: GET_BOOK,
    id: id
  }
}

export const createComment = comment => {
  return {
    type: CREATE_COMMENT,
    comment: comment
  }
}
