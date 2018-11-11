export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const GET_BOOKS = 'GET_BOOKS';






export const initialState = {
  books: [
    {id: 1234, title: "abcd", category: 'Kids'},
    {id: 2345, title: "birds", category: 'Learning'},
    {id: 3456, title: "USA", category: 'History'}
  ],
  filters: [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]
}
