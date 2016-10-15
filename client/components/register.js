import React from 'react';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
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

  handlePasswordConfirmedChange(e) {
    this.setState({confirmedPassword: e.target.value})
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.confirmedPassword);

    if (this.passwordMatch(this.state.password, this.state.confirmedPassword)) {
      console.log('passwords matchs');
      Accounts.createUser({
        username: this.state.username,
        password: this.state.password
      });
    } else {
      console.log('passwords do not match')
    }
  }

  passwordMatch(password, confirmedPassword) {
    if (password === confirmedPassword) {
      return true;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange= {this.handleUsernameChange}
        />

        <input
          type="text"
          placeholder="password"
          onChange= {this.handlePasswordChange}
        />

        <input
          type="text"
          placeholder="confirm password"
          onChange= {this.handlePasswordConfirmedChange}
        />

        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
