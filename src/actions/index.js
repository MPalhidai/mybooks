// define all redux actions
import {
  CREATE_BOOK,
  REMOVE_BOOK,
  CHANGE_FILTER,
  CHANGE_BOOK,
  SET_BOOK,
  CREATE_COMMENT,
  EDIT_BOOK,
  SET_BOOKS,
  SET_COMMENTS,
  SET_CATEGORIES,
  CREATE_CATEGORY,
  CURRENT_USER
} from './constants';

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

export const changeBook = book => {
  return {
    type: CHANGE_BOOK,
    book: book
  }
}

export const setBook = book => {
  return {
    type: SET_BOOK,
    book: book
  }
}

export const createComment = comment => {
  return {
    type: CREATE_COMMENT,
    comment: comment
  }
}

export const editBook = book => {
  return {
    type: EDIT_BOOK,
    book: book
  }
}

export const setBooks = books => {
  return {
    type: SET_BOOKS,
    books: books
  }
}

export const setComments = comments => {
  return {
    type: SET_COMMENTS,
    comments: comments
  }
}

export const setCategories = categories => {
  return {
    type: SET_CATEGORIES,
    categories: categories
  }
}

export const createCategory = category => {
  return {
    type: CREATE_CATEGORY,
    category: category
  }
}

export const currentUser = user => {
  return {
    type: CURRENT_USER,
    user: user
  }
}
