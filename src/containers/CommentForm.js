import React from 'react';
import '../css/Form.css';

import { connect } from 'react-redux';
import { addComment } from '../actions/async';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      content: '',
      book_id: Number(this.props.bookId),
      user: ''
    };
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
      rating: '',
      user: ''
    });
  }

  render() {
    return (
      <form className = 'Form'>
        <p className = 'formHeader'>ADD NEW COMMENT</p>
        <div className = 'flexDiv'>
          <input className = 'commentFormInput' type = 'text' name = 'user' value = { this.state.user } onChange = { this.handleChange } placeholder = 'Name' />
          <input className = 'commentFormInput' type = 'number' name = 'rating' value = { this.state.rating } onChange = { this.handleChange } placeholder = 'Rating 0 - 100' />
          <button className = 'formBtn' onClick = { this.handleSubmit }>
            Add Comment
          </button>
        </div>
        <div className = 'centerDiv'>
          <textarea className = 'commentFormTextBox' type = 'text' name = 'content' value = { this.state.content } onChange = { this.handleChange } placeholder = 'This book is great!!!'/>
        </div>
      </form>
    );
  }
}



const mapDispatchToProps = {
  addComment
}

export default connect(null, mapDispatchToProps)(CommentForm)
