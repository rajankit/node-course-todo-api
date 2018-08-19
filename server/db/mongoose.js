var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://ankitrj:ankit1430@ds125872.mlab.com:25872/ankitrj-todo-api');

module.exports = { mongoose };