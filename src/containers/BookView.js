import React from 'react';
import '../css/BookView.css';
import { Book } from '../components/Book';
import { Comment } from '../components/Comment';
import { connect } from 'react-redux';
import { getBook } from '../actions/async'

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
            />
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getBook(this.props.id)
  }
}

const mapStateToProps = state => { // shouldn't load the whole store, only this book and related info
  return {
    book: state.inventory.book,
    opinions: state.opinions.comments // currently showing all comments on all books
  }
};

const mapDispatchToProps = {
  getBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
