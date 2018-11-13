import React from 'react';
import { Book } from '../components/Book';
import { CategoryFilter } from '../components/CategoryFilter'
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';

import '../css/BookList.css';

class BookList extends React.Component {

  handleRemoveBook = id => {
    this.props.onRemoveBook(id);
  };

  handleFilterChange = filter => {
    this.props.onFilterChange(filter);
  };

  render() {
    return(
      <div className = 'BookList'>
        <CategoryFilter  selector = { this.handleFilterChange }/>
        { this.props.inventory.filter( book => this.props.categories.includes(book.category)).map( (book, idx) => (
          <Book
            key = { idx }
            id = { book.id }
            title = { book.title }
            category = { book.category }
            removeBtn = { this.handleRemoveBook }
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory.books,
    categories: state.categories.filters
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveBook: bookId => {
      dispatch(removeBook(bookId));
    },
    onFilterChange: filterCategory => {
      dispatch(changeFilter(filterCategory));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
