import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Profiles = new Mongo.Collection("profiles");
Requests = new Mongo.Collection("requests");
Transactions = new Mongo.Collection("transactions");
