var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// 'mongodb://ankitrj:ankit1430@ds125872.mlab.com:25872/ankitrj-todo-api' ||
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };