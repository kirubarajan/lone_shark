import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

var schedule = later.parse.recur().on(1).minute(); // on fifth minute of every hour, every day
var hourlyEmailer = new ScheduledTask(schedule, function () {

  var requests = Requests.find({accepted: true, open: true});

  for (var i = 0; i < requests.length; i++) {

    // compound the amount

    var total = requests[i].total;

    var difference = total * 0.04;

    total = total * 1.04;

    Requests.update({_id: requests[i]._id}, {total: total});

    // send email to receiver that his debt's been compounded

    Email.send({
      to: "simh@live.ca",
      from: "hello@notsoloneshark.loan",
      subject: "Example Email",
      text: "The contents of our email in plain text.",
    });

  }

});

Meteor.startup(() => {

  hourlyEmailer.start();

  process.env.MAIL_URL = "smtp://postmaster@mg.notsoloneshark.loan:44d133fe79b9d983debf3fe27c20317f@smtp.mailgun.org:587";

});
