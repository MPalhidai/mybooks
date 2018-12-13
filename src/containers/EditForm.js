import React from 'react';
import '../css/Form.css';

import { connect } from 'react-redux';
import { updateBook } from '../actions/async';
import { initialState } from '../actions/constants';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    let book = this.props.inventory.filter( book => book.id === Number(this.props.id))[0];

    this.state = {
      id: book.id,
      title: book.title,
      category: book.category,
      author: book.author,
      total_pages: book.total_pages,
      current_page: book.current_page,
      current_chapter: book.current_chapter
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOptions = event => {
    this.setState({
      category: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateBook(this.state);
  }

  render() {

    return (
      <form className = 'Form'>
        <p className = 'formHeader'>EDIT THIS BOOK</p>
        <div className = 'flexDiv row'>
          <div className = 'flexDiv col'>
            <p className = 'fieldLabel'>Title:</p>
            <input className = 'bookFormInput' type = 'text' name = 'title' value = { this.state.title } onChange = { this.handleChange } placeholder = { this.state.title }/>
          </div>
          <div className = 'flexDiv col'>
            <p className = 'fieldLabel'>Category:</p>
            <select className = 'formSelector' name = 'categories' onChange = { this.handleOptions } value = { this.state.category }>
              { initialState.filters.map( (category, idx) => (
                <option value = { category } key = { idx }>{ category }</option>
              ))}
            </select>
          </div>
          <button className = 'formBtn' onClick = { this.handleSubmit }>
            Edit Book
          </button>
        </div>
        <div className = 'flexDiv row'>
          <div className = 'flexDiv col'>
            <p className = 'fieldLabel'>Author:</p>
            <input className = 'bookFormValue' type = 'text' name = 'author' value = { this.state.author } onChange = { this.handleChange } placeholder = { this.state.author }/>
          </div>
          <div className = 'flexDiv col'>
            <p className = 'fieldLabel'>Total Pages:</p>
            <input className = 'bookFormValue' type = 'number' name = 'total_pages' value = { this.state.total_pages } onChange = { this.handleChange } placeholder = { this.state.total_pages }/>
          </div>
          <div className = 'flexDiv col'>
            <p className = 'fieldLabel'>Current Page:</p>
            <input className = 'bookFormValue' type = 'number' name = 'current_page' value = { this.state.current_page } onChange = { this.handleChange } placeholder = { this.state.current_page }/>
          </div>
          <div className = 'flexDiv'>
            <p className = 'fieldLabel'>Current Chapter:</p>
            <input className = 'bookFormValue' type = 'text' name = 'current_chapter' value = { this.state.current_chapter } onChange = { this.handleChange } placeholder = { this.state.current_chapter }/>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory.books
  }
}

const mapDispatchToProps = {
  updateBook
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
