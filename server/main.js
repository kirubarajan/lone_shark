import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

var schedule = later.parse.recur().on(1).minute();
var hourlyEmailer = new ScheduledTask(schedule, function () {

  var requests = Requests.find({accepted: true, open: true});

  for (var i = 0; i < requests.length; i++) {

    // compound the amount

    var total = requests[i].total;

    var difference = total * 0.04;

    total = total * 1.04;

    Requests.update({_id: requests[i]._id}, {total: total});

    var email = Profiles.findOne({user: requests[i].receiver}).email;

    // send notifcation to receiver that his debt's been compounded

    Email.send({
      to: email,
      from: "hello@notsoloneshark.loan",
      subject: "Loan Compounded",
      text: "Your loan of " + requests[i].amount + " dollars was compounded 4%. Your outstanding balance is " + requests[i].total + ".",
    });

  }

});

Meteor.startup(() => {

  hourlyEmailer.start();

  process.env.MAIL_URL = "smtp://postmaster@mg.notsoloneshark.loan:44d133fe79b9d983debf3fe27c20317f@smtp.mailgun.org:587";

});
