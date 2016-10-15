import { Meteor } from 'meteor/meteor';

Meteor.methods({

  register: function(user, name) {

    // inserts profile shit

    return Profiles.insert({user: user, name: name});

  },

  request: function(amount, receiver) {

    // matching algorithm -> sends matched sender a loan request

    Requests.insert({receiver: receiver, amount: amount});

  },

  transfer: function(request, decision) {

    // uses blockchain to transfer bitcoin of given request, or discard request

    if (decision == true) {

      Requests.update({_id: request}, {open: false, accept: true});

    }

    var request = Requests.findOne(request);

  },

});
