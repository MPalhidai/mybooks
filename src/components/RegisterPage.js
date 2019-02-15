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
      password: '',
      confirmPassword: ''
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
      password: '',
      confirmPassword: ''
    });
  }

  render () {
    return (
      <div className = 'singlePage'>
        <form className = 'userForm' >
          <p className = 'formHeader'>Register</p>
          <input name="name" className = 'userInput' type="text" value = { this.state.name } onChange = { this.handleChange } placeholder = 'Name' />
          <input name="email" className = 'userInput' type="email" value = { this.state.email } onChange = { this.handleChange } placeholder = 'Email' />
          <input name="password" className = 'userInput' type="password" value = { this.state.password } onChange = { this.handleChange } placeholder = 'Password' />
          <input name="confirmPassword" className = 'userInput' type="password" value = { this.state.confirmPassword } onChange = { this.handleChange } placeholder = 'Password Confirmation' />
          <div className = 'centered' >
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
