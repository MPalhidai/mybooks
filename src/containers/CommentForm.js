import React from 'react';
import '../css/Form.css';

import { connect } from 'react-redux';
import { addComment } from '../actions/async';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { rating: '', content: '', book_id: this.props.bookId, user_id: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      content: '',
      rating: ''
    });
  }

  render() {
    return (
      <form className = 'Form'>
        <p className = 'formHeader'>ADD NEW COMMENT</p>
        <div className = 'flexDiv'>
          <input className = 'commentFormInput' type = 'text' name = 'content' value = { this.state.content } onChange = { this.handleChange } placeholder = 'This book is great!!!'/>
          <input className = 'commentFormInput' type = 'number' name = 'rating' value = { this.state.rating } onChange = { this.handleChange } placeholder = 'Rating 0 - 100' />
          <button className = 'formBtn' onClick = { this.handleSubmit }>
            Add Comment
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
