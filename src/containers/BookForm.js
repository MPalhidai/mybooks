import React from 'react';
import '../css/BookForm.css';

import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const categories = ['Action','Biography','History','Horror','Kids','Learning','Sci-Fi'];

class BookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id: 1, title: '', category: 'Action' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  }

  handleOptions = event => {
    this.setState({
      category: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitNewBook(this.state);
    this.setState({
      id: (this.state.id + 1), // change this to redux store state and not this component state
      title: '',
      category: 'Action'
    });
  }

  render() {
    return (
      <form className = 'BookForm'>
        <input className = 'bookFormInput' type = 'text' name = 'title' value = { this.state.title } onChange = { this.handleChange } placeholder = 'Title'/>
        <select className = 'bookFromSelector' name = 'categories' onChange = { this.handleOptions } value = { this.state.category }>
          { categories.map( category => (
            <option value = { category }>{ category }</option>
          ))}
        </select>
        <button className = 'bookFormBtn' onClick = { this.handleSubmit }>Add Book</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    // id: state.id,
    // title: state.title,
    // category: state.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitNewBook: book => {
      dispatch(createBook(book));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)
