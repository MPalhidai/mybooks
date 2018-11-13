import React from 'react';
import '../css/Book.css';

export class Book extends React.Component {
  render() {
    return (
      <div className = 'bookCard' key = { this.props.key } id = { this.props.id }>
        <p className = 'bookCategory'>{ this.props.category }</p>
        <p className = 'bookTitle'>{ this.props.title }</p>
        <p className = 'bookAuthor'>Author</p>
        <p className = 'bookLinks'>
          <span className = 'bookLink'>Comments</span>
          <span className = 'bookLink' onClick = { () => this.props.removeBtn(this.props.id) }>
            Remove
          </span>
          <span className = 'bookLink'>Edit</span>
        </p>
      </div>
    );
  }
}
