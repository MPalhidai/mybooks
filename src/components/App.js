import React from 'react';
import '../css/App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import { Nav } from './Nav';

export class App extends React.Component {
  render() {
    return (
      <div className = 'App'>
        <Nav />
        <div className = 'container'>
          <BookList />
          <BookForm />
        </div>
      </div>
    );
  }
}
