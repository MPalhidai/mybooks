export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const SET_BOOKS = 'SET_BOOKS';
export const SET_BOOK = 'SET_BOOK';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_BOOK = 'EDIT_BOOK';


export const API_URL = 'https://mybooksapi.herokuapp.com';

export const initialState = {
  books: [],
  filters: [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ],
  book: {},
  comments: [
    {id: 1, rating: 77, content: 'This books is great!!!', book_id: 1}
  ]
}
