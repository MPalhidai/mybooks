import React from 'react';
import { Book } from '../components/Book';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

import '../css/BookList.css';

class BookList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.handleRemoveBook = this.handleRemoveBook.bind(this);
  // }

  handleRemoveBook = id => {
    this.props.onRemoveBook(id);
  };

  render() {
    return(
      <div className = 'BookList'>
        <table className = 'table'>
          <tr className = 'tableHeader'>
            <th className = 'id'>Id</th>
            <th className = 'title'>Title</th>
            <th className = 'category'>Category</th>
            <th className = 'remove'>Remove</th>
          </tr>
          { this.props.inventory.map( (book, idx) => (
            <Book
              key = { idx }
              id = { book.id }
              title = { book.title }
              category = { book.category }
              removeBtn = { this.handleRemoveBook }
            />
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.books
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveBook: bookId => {
      dispatch(removeBook(bookId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
