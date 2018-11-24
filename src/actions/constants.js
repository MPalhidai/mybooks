export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const GET_BOOK = 'GET_BOOK';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export const initialState = {
  books: [
    {id: 1, title: "ABC's", category: 'Kids'},
    {id: 2, title: "Birds", category: 'Learning'},
    {id: 3, title: "USA", category: 'History'}
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
