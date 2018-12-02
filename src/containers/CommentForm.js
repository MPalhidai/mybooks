import React from 'react';
import '../css/Form.css';

import { connect } from 'react-redux';
import { createComment } from '../actions/index';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: 1, rating: null, content: '', book_id: 1, user_id: 1 };
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
    this.props.submitNewComment(this.state);
    this.setState({
      id: (this.state.id + 1), // change this to redux store state and not this component state
      content: '',
      rating: null
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

const mapDispatchToProps = dispatch => {
  return {
    submitNewComment: comment => {
      dispatch(createComment(comment));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
