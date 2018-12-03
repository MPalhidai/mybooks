import { API_URL } from './constants';
import { setBooks, createBook, editBook, removeBook } from './index';

export const getBooks = () => {
  return dispatch => {
    return fetch(`${API_URL}/books`)
      .then(response => response.json())
      .then(books => {
        if(books) {
          dispatch(setBooks(books))
        }
      })
      .catch(error => console.log(error));
  };
}

export const addBook = book => {
  console.log(book);
  return dispatch => {
    return fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book })
    })
      .then(response => {
        response.json()
        console.log(response);
      })
      .then(book => {
        if(book) {
          console.log(book);
          dispatch(createBook(book))
        }
      })
      .catch(error => console.log(error))
  };
}

export const updateBook = (bookId, book) => {
  return dispatch => {
    return fetch(`${API_URL}/books/${bookId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book })
    })
      .then(response => response.json())
      .then(book => {
        dispatch(editBook(book))
      })
      .catch(error => console.log(error))
  };
}

export const deleteBook = bookId => {
  return dispatch => {
    return fetch(`${API_URL}/books/${bookId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: bookId })
    })
      .then(response => response.json())
      .then(book => {
        dispatch(removeBook(book))
      })
      .catch(error => console.log(error))
  };
}
