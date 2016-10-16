import React from 'react';
import { hashHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);

    if (this.state.username !== null && this.state.password !== null) {
      Meteor.loginWithPassword(this.state.username, this.state.password);
      hashHistory.push('/loggedin');
    } else {
      console.log('fired');
      alert('Please enter your email and password.');
    }
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange= {this.handleUsernameChange}
          />

          <input
            type="password"
            placeholder="password"
            onChange= {this.handlePasswordChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
