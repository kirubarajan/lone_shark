import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({

  register: function(user, name) {

    return Profiles.insert({user: Meteor.userId(), name: name, score: 0});

  },

  request: function(amount, receiver, message) {

    var date = new Date();

    var creditScore = Profiles.findOne(receiver).score;

    Requests.insert({creditScore: creditScore, message, message, receiver: receiver, amount: amount, accept: false, open: true, sender: null, time: date.getTime(), score: null});


  },

  transfer: function(request, decision, sender) {

    // uses blockchain to transfer bitcoin of given request, or discard request

    if (decision == true) {

      Requests.update({_id: request}, {accept: true, sender: sender});

    }

    // sends money

    var request = Requests.findOne(request);

  },

  return: function(request, receiver) {

    var initialTime = Requests.findOne(request).time;
    var date = new Date();

    Requests.update({_id: request}, {open: false, time: date.getTime() - initialTime});

    var hours = (Requests.findOne(request).time) / 3600000;
    var amount = Requests.findOne(request).amount;

    var transactionScore = (336 / hours) * amount;

    amount = amount * Math.pow(1.04, hours);

    // return money back

    Requests.update({_id: request}, {score: transactionScore});

    var creditScore = Profiles.findOne({user: receiver}).score + transactionScore;
    Profiles.update({user: receiver}, {score: creditScore});

  },

  fetchRequests: function(filterByAmount) {

    var requests = Requests.find({accept: false}).fetch();

    for (var i = 0; i < requests.length; i++) {

      requests[i].rank = requests[i].creditScore / requests[i].time;

    }

    if (filterByAmount == true) {

      requests.sort(function(a, b) {
          return a.rank - b.rank;
      });

      return requests;

    }

    else {

      requests.sort(function(a, b) {
          return (0.2(a.rank) / a.amount) - (0.2(b.rank) / b.amount);
      });

      return requests;

    }

  }

});
