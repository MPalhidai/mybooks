import React from 'react';
import '../css/BookView.css';
import { Book } from '../components/Book';
import { Comment } from '../components/Comment';
import { connect } from 'react-redux';

class BookView extends React.Component {
  render() {


    let book = this.props.inventory.filter( book => book.id === Number(this.props.id))[0];

    return(
      <div className = 'BookView'>
        <Book
          id = { book.id }
          title = { book.title }
          category = { book.category }
        />
        <div className = 'CommentList'>
          { this.props.opinions.filter( comment => comment.book_id === book.id ).map( (comment, idx) => (
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
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory.books,
    opinions: state.opinions.comments // currently showing all comments on all books
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
