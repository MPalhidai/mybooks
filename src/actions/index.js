// define all redux actions
import { CREATE_BOOK, REMOVE_BOOK, GET_BOOKS } from './constants';
import { store } from '../store';

export const createBook = book => {
  store.dispatch({
    type: CREATE_BOOK,
    book: book
  })
}

export const removeBook = id => {
  store.dispatch({
    type: REMOVE_BOOK,
    id: id
  })
}

export const getBooks = () => {
  store.dispatch({
    type: GET_BOOKS
  })
}
