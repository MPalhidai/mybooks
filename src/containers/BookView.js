import React from 'react';
import '../css/BookView.css';
import { Book } from '../components/Book';
import { Comment } from '../components/Comment';
import { connect } from 'react-redux';
import { getBook, getComments } from '../actions/async'

class BookView extends React.Component {
  render() {
    return(
      <div className = 'BookView'>
        <Book
          id = { this.props.book.id }
          title = { this.props.book.title }
          author = { this.props.book.author }
          category = { this.props.book.category }
          current_page = { this.props.book.current_page }
          current_chapter = { this.props.book.current_chapter }
          total_pages = { this.props.book.total_pages }
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
    book: state.inventory.book,
    opinions: state.opinions.comments
  }
};

const mapDispatchToProps = {
  getBook,
  getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
