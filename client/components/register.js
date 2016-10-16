import React from 'react';
import { hashHistory } from 'react-router';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmedChange = this.handlePasswordConfirmedChange.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handlePasswordConfirmedChange(e) {
    this.setState({confirmedPassword: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.confirmedPassword);

    if (this.passwordMatch(this.state.password, this.state.confirmedPassword)) {
      console.log('passwords match');
      Accounts.createUser({
        username: this.state.username,
        password: this.state.password
      });

      const userId = Meteor.userId();
      Meteor.call('register', userId, this.state.name);
      hashHistory.push('/loggedin')
    } else {
      alert('passwords do not match');
      console.log('passwords do not match');
    }
  }

  passwordMatch(password, confirmedPassword) {
    if (password === confirmedPassword) {
      return true;
    }
  }

  render() {
    return (
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            placeholder="name"
            onChange={this.handleNameChange}
          />

          <input
            type="text"
            placeholder="email"
            onChange={this.handleUsernameChange}
          />

          <input
            type="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
          />

          <input
            type="password"
            placeholder="confirm password"
            onChange={this.handlePasswordConfirmedChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
