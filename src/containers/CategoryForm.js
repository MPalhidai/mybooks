import React from 'react';
import '../css/Form.css';
import { connect } from 'react-redux';
import { addCategory } from '../actions/async';

class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: ''
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
    this.props.addCategory(this.state);
    this.setState({
      category: ''
    });
  }

  render() {
    return (
      <form className = 'Form'>
        <p className = 'formHeader'>ADD NEW CATEGORY</p>
        <div className = 'flexDiv'>
          <input className = 'commentFormInput' type = 'text' name = 'category' value = { this.state.category } onChange = { this.handleChange } placeholder = 'Kids' />
          <button className = 'formBtn' onClick = { this.handleSubmit }>
            Add Category
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addCategory
}

export default connect(null, mapDispatchToProps)(CategoryForm)
