import React from 'react';
import { Book } from '../components/Book';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

import '../css/BookList.css';

class BookList extends React.Component {

  render() {
    return(
      <div className = 'BookList'>
        <table className = 'table'>
          <tr className = 'tableHeader'>
            <th className = 'id'>Id</th>
            <th className = 'title'>Title</th>
            <th className = 'category'>Category</th>
          </tr>
          { this.props.inventory.map( (book, idx) => (
            <Book
              key = { idx }
              id = { book.id }
              title = { book.title }
              category = { book.category }
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeBookBtn: bookId => {
      dispatch(removeBook(bookId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
