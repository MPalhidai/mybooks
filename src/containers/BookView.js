import React from 'react';
import '../css/BookView.css';
import { Book } from '../components/Book';
import { Comment } from '../components/Comment';
import { connect } from 'react-redux';
import { getBook, getComments, deleteBook, updateBook } from '../actions/async';
import { changeBook } from '../actions/index';

class BookView extends React.Component {

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
      this.props.changeBook(book);
    }
  };

  render() {
    let book = this.props.book;
    return(
      <div className = 'BookView'>
        <Book
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
        <div className = 'CommentList'>
          { this.props.opinions.map( (comment, idx) => (
            <Comment
              key = { idx }
              id = { comment.id }
              rating = { comment.rating }
              content = { comment.content }
              book_id = { comment.book_id }
              user = { comment.user }
            />
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getBook(this.props.bookId)
    this.props.getComments(this.props.bookId)
  }
}

const mapStateToProps = state => {
  return {
    book: state.activeBook,
    opinions: state.opinions
  }
};

const mapDispatchToProps = {
  getBook,
  getComments,
  deleteBook,
  updateBook,
  changeBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
