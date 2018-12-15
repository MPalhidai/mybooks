import React from 'react';
import '../css/BookList.css';
import { Book } from '../components/Book';
import { CategoryFilter } from '../components/CategoryFilter';
import { connect } from 'react-redux';
import { getBooks, deleteBook, dispatchFilter, updateBook } from '../actions/async';

class BookList extends React.Component {

  handleRemoveBook = id => {
    if(window.confirm('Are you sure you want to remove this book?')){
      this.props.deleteBook(id);
    }
  };

  handleEditProgress = book => {
    let value = prompt('What page are you on now?');
    if(value) {
      book.current_page = value;
      this.props.updateBook(book);
    }
  };

  handleFilterChange = filter => {
    this.props.dispatchFilter(filter);
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
    inventory: state.inventory,
    categories: state.categories
  }
};

const mapDispatchToProps = {
  getBooks,
  deleteBook,
  dispatchFilter,
  updateBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
