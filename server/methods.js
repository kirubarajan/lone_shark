import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Email } from 'meteor/email';

Meteor.methods({

  register: function(user, name) {

    return Profiles.insert({user: Meteor.userId(), name: name, score: 0, wallet: 1});

  },

  request: function(amount, receiver, message) {

    var date = new Date();

    var creditScore = Profiles.findOne({user: receiver}).score;

    var name = Profiles.findOne({user: receiver}).name;

    Requests.insert({creditScore: creditScore, message, message, receiver: receiver, amount: amount, accept: false, open: true, sender: null, time: date.getTime(), score: null, name: name});

  },

  transfer: function(request, decision, sender) {

    // uses blockchain to transfer bitcoin of given request, or discard request
    console.log('fired');

    var wallet = Profiles.findOne({user: sender}).wallet;
    var request = Requests.findOne(request);

    Requests.update({_id: request}, {$set: {sender: sender}});

    if (decision == true && wallet >= request.amount) {

      Requests.update(request, {$set: {accept: true}});

      Profiles.update({user: sender}, {$inc: {wallet: -request.amount}});

      var wallet = Profiles.findOne({user: request.receiver}).wallet;

      Profiles.update({user: request.receiver}, {$inc: {wallet: request.amount}});

      var email = Meteor.users.findOne(request.receiver).email;

      Email.send({
        to: email,
        from: "hello@notsoloneshark.loan",
        subject: "Loan Compounded",
        text: "You have been loaned " + request.amount + " dollars. In one hour your loan will be compounded 4% and you will owe " + request.amount * 1.004 + " dollars. In one day you will owe " + request.amount * 1.1005483003 + " dollars. Pay back your loan quickly!",
      });

    }

  },

  return: function(request, receiver) {

    var initialTime = Requests.findOne(request).time;
    var date = new Date();

    Requests.update({_id: request}, {$set: {open: false, time: date.getTime() - initialTime}});

    var hours = (Requests.findOne(request).time) / 3600000;
    var total = Requests.findOne(request).total;

    var transactionScore = (336 / hours) * total;

    // return money back

    Requests.update({_id: request}, {$set: {score: transactionScore}});

    var creditScore = Profiles.findOne({user: receiver}).score + transactionScore;
    Profiles.update({user: receiver}, {$set: {score: creditScore}});

  },

  fetchRequests: function(filterByAmount) {

    var requests = Requests.find({accept: false}).fetch();

    for (var i = 0; i < requests.length; i++) {

      requests[i].rank = requests[i].creditScore / requests[i].time;

      var receiver = Profiles.findOne(requests[i].receiver);

    }

    Meteor._sleepForMs(2000);

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

  },

  getWallet: function(user) {

    return Profiles.findOne({user: user}).wallet

  }

});
