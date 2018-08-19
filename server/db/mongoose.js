var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds123822.mlab.com:23822/mongo_data',{ useNewUrlParser: true });

module.exports = { mongoose };