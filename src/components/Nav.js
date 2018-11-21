import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

export class Nav extends React.Component {
  render() {
    return (
      <div className = 'Nav'>
        <div className = 'header'>
          <div className = 'headerLinks'>
            <Link to = '/' className = 'logoLink'>Bookstore CMS</Link>
            <Link to = '/' className = 'booksLink'>Books</Link>
            <Link to = '/' className = 'categoryLink'>Categories</Link>
          </div>
          <div className = 'userCircle'>
            <FontAwesomeIcon icon = 'user' />
          </div>
        </div>
      </div>
    );
  }
}
