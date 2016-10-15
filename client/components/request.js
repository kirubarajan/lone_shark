import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoanAmountChange = this.handleLoanAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return {bitcoin: '' };
  }

  handleLoanAmountChange(e) {
    this.setState({loan: e.target.value});
    const cad = parseInt(e.target.value);
    const bitcoin = cad / 0.0012;
    this.setState({bitcoin: bitcoin})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Amount of money"
          onChange= {this.handleLoanAmountChange}
        />

        <div>Bitcoin: {this.state.bitcoin}></div>

        <input
          type="text"
          placeholder="Message to loaner"
          onChange= {this.handlePasswordChange}
        />

        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
