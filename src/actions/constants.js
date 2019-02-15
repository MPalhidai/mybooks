export const CREATE_BOOK = 'CREATE_BOOK';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';

export const SET_BOOK = 'SET_BOOK';
export const SET_BOOKS = 'SET_BOOKS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const EDIT_BOOK = 'EDIT_BOOK';
export const CHANGE_BOOK = 'CHANGE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const CHANGE_FILTER = 'CHANGE_FILTER';

export const API_URL = 'https://mybooksapi.herokuapp.com';

export const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        firstName: null, // <-- Just an example. Attributes are whatever you specify in your cofig (below).
      },
    },
  },
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
  comments: []
}
