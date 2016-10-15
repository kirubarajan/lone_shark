import React from 'react';
import Remarkable from 'remarkable';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoin: 0
    }
    this.handleLoanAmountChange = this.handleLoanAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoanAmountChange(e) {
    this.setState({loan: e.target.value});
    var cad = e.target.value;
    var bitcoinCurrency = cad / (1 / 0.0012);

    console.log(bitcoinCurrency);
    this.setState({bitcoin: bitcoinCurrency})
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

        <div>Bitcoin: {this.state.bitcoin}</div>

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
