import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({

  register: function(user, name) {

    // inserts profile shit

    return Profiles.insert({user: Meteor.userId(), name: name, score: 0});

  },

  request: function(amount, receiver, message) {

    // matching algorithm -> sends matched sender a loan request

    var date = new Date();

    Requests.insert({message, message, receiver: receiver, amount: amount, accept: false, open: true, sender: null, time: date.getTime(), score: null});

    console.log("request");

  },

  transfer: function(request, decision, sender) {

    // uses blockchain to transfer bi tcoin of given request, or discard request

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

    // updates users credit score

    var creditScore = Profiles.findOne({user: receiver}).score + transactionScore;
    Profiles.update({user: receiver}, {score: creditScore});

  }

});
