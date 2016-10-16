import React from 'react';
import { Link } from 'react-router';
export default class HomeLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletBalance: 0,
    }
  }

  componentWillMount() {
    console.log('mounted');
    console.log(this.state.walletBalance);
    this.setState({
      walletBalance: Profiles.findOne({user: Meteor.userId()}).wallet
    })
    console.log(this.state.walletBalance);
  }

  render() {
    return (
      <div className="homeLoggedIn">
        <h1>Not so lone shark</h1>
        <p>Your wallet balance: {this.state.walletBalance}</p>
        <div>
          <button><Link to="request">Request</Link></button>
          <button><Link to="marketplace">Offer</Link> <br/></button>
        </div>
      </div>
    );
  }
}
