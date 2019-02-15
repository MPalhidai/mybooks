import React from 'react';
import '../css/Form.css';
import { connect } from 'react-redux';
import { signInUser } from '../redux-token-auth-config';

class SignInPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    this.props.signInUser(this.state).then().catch();
    this.setState({
      email: '',
      password: ''
    });
  }

  render () {
    return (
      <div>
        <div className = 'singlePage'>
          <form className = 'userForm' >
            <p className = 'formHeader'>Sign In</p>
            <input name="email" className = 'userInput' type="email" value = { this.state.email } onChange = { this.handleChange } placeholder = 'Email' />
            <input name="password" className = 'userInput' type="password" value = { this.state.password } onChange = { this.handleChange } placeholder = 'Password' />
            <div className = 'centered' >
              <button className = 'formBtn' onClick = { this.handleSubmit }>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  signInUser
}

export default connect(null, mapDispatchToProps)(SignInPage);
