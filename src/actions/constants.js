export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const GET_BOOK = 'GET_BOOK';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_BOOK = 'EDIT_BOOK';
export const SET_BOOKS = 'SET_BOOKS';

export const API_URL = 'https://mybooksapi.herokuapp.com';

export const initialState = {
  books: [
    {
      id: 1,
      title: "ABC's",
      category: 'Kids',
      author: 'Michael P.',
      current_page: 30,
      current_chapter: 'A is for Alligator',
      total_pages: 1234
    }
  ],
  filters: [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ],
  comments: [
    {id: 1, rating: 77, content: 'This books is great!!!', book_id: 1}
  ]
}
