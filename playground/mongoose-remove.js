const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// we do not get the docs back
// Todo.remove({}).then((results) => {
//     console.log(results);
// });

// we do get the docs back
// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()
// Both run same

// here we can provide more information of the todo which needs to be deletd
Todo.findOneAndRemove({_id : '5b7af63cf2c2cf49f6dc57f1'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5b7af63cf2c2cf49f6dc57f1').then((todo) => {
    console.log(todo);
});