import React from 'react';
import BookList from '../containers/BookList';
import { BookForm } from '../containers/BookForm';

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BookForm />
        <BookList />
      </div>
    );
  }
}
