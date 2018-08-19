// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // const db = client.db('TodoApp');
    // // db.collection('Todos').insertOne({
    // //     text : 'Something to do',
    // //     completed: false
         
    // // },(err,result) => {
    // //     if(err){
    // //         return console.log('Unable to connect MongoDB server: ', err);
    // //     }
    // //     console.log(JSON.stringify(result.ops, undefined, 2));
    // // });

    // db.collection('users').insertOne({
    //     email: 'ankit@example.com'
    // },(err, result) => {
    //     if(err){
    //         return console.log('Unable to connect MongoDB server: ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // // db.collection('Todos').insertOne({
    // //     text: 'read computer networks',
    // //     completed: false
    // // },(err, result) => {
    // //     if(err){
    // //         return console.log('Unable to connect MongoDB server: ', err);
    // //     }
    // //     console.log(JSON.stringify(result.ops, undefined, 2));
    // // });
    client.close();
});