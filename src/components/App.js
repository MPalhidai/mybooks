import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import '../css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

export class App extends React.Component {
  render() {
    return (
      <div className = 'App'>
        <div className = 'header'>
          <span className = 'logo'>Bookstore CMS</span>
          <span className = 'headerLink'>Books</span>
          <span className = 'headerLink'>Categories</span>
          <div className = 'userCircle'>
            <FontAwesomeIcon icon = 'user' />
          </div>
        </div>
        <div className = 'container'>
          <BookList />
          <BookForm />
        </div>
      </div>
    );
  }
}
