import React from 'react';
import '../css/BookList.css';
import { Book } from '../components/Book';
import { CategoryFilter } from '../components/CategoryFilter';
import { connect } from 'react-redux';
// import { removeBook, changeFilter, editBook } from '../actions/index';
import { getBooks, deleteBook } from '../actions/async';

class BookList extends React.Component {

  handleRemoveBook = id => {
    if(window.confirm('Are you sure you want to remove this book?')){
      this.props.deleteBook(id);
    }
  };

  handleEditProgress = id => {
    let value = prompt('What page are you on now?');
    if(value) {
      this.props.updateProgress(id, value);
    }
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
            author = { book.author }
            category = { book.category }
            current_page = { book.current_page }
            current_chapter = { book.current_chapter }
            total_pages = { book.total_pages }
            removeBtn = { this.handleRemoveBook }
            progressBtn = { this.handleEditProgress }
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.props.getBooks()
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory.books,
    categories: state.categories.filters
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onRemoveBook: bookId => {
//       dispatch(removeBook(bookId));
//     },
//     onFilterChange: filterCategory => {
//       dispatch(changeFilter(filterCategory));
//     },
//     onEditProgress: (id, value) => {
//       dispatch(editBook(id, value));
//     }
//   }
// }

const mapDispatchToProps = {
  getBooks,
  deleteBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
