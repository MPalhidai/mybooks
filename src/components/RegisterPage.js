import React from 'react'
import '../css/Form.css';
import { connect } from 'react-redux'
import { registerUser } from '../redux-token-auth-config'

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
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
    this.props.registerUser(this.state).then().catch();
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render () {
    return (
      <div className = 'singlePage'>
        <form className = '' >
          <p className = 'formHeader'>Register</p>
          <div className = '' >
            <input name="name" className = 'userInput' type="text" value = { this.state.name } onChange = { this.handleChange } placeholder = 'Name' />
            <input name="email" className = 'userInput' type="email" value = { this.state.email } onChange = { this.handleChange } placeholder = 'Email' />
            <input name="password" className = 'userInput' type="password" value = { this.state.password } onChange = { this.handleChange } placeholder = 'Password' />
            <button className = 'formBtn' onClick = { this.handleSubmit }>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  registerUser
}

export default connect( null, mapDispatchToProps )(RegisterPage)
