import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default class HomeLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletBalance: 0,
    }
    this.logout = this.logout.bind(this);
  }

  logout() {
    Meteor.logout();
  }

  componentWillMount() {
    Meteor.call("getWallet", Meteor.userId(), function(error, result) {

      Session.set('wallet', result);

    });

    this.setState({
      walletBalance: Session.get('wallet')
    })

  }

  render() {
    return (
      <div className="homeLoggedIn">
        <h1>Not so lone shark</h1>
        <p>Your wallet balance: {this.state.walletBalance} BTC</p>
        <div>
          <button><Link to="request">Request</Link></button>
          <button><Link to="marketplace">Offer</Link> <br/></button>
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}
