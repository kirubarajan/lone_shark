import React from 'react';
import { hashHistory } from 'react-router';

export default class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoin: 0,
      message: ''
    }
    this.handleLoanAmountChange = this.handleLoanAmountChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoanAmountChange(e) {
    this.setState({loan: e.target.value});
    var cad = e.target.value;
    var bitcoinCurrency = cad / (1 / 0.0012);

    this.setState({bitcoin: bitcoinCurrency});
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const userId = Meteor.userId();
    console.log(this.state.bitcoin);
    console.log(userId);
    console.log(this.state.message);
    Meteor.call('request', this.state.bitcoin, userId, this.state.message);
    hashHistory.push('/marketplace');
  }

  render() {
    return (
      <div className="request">
        <h1>Request a loan</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Amount of CAD dollars"
            onChange= {this.handleLoanAmountChange}
          />

          <div><p>{this.state.bitcoin} BTC</p></div>

          <textarea
            type="text"
            placeholder="Message to loaner"
            onChange= {this.handleMessageChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
