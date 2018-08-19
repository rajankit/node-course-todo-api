// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID('5b781788d905ca707e0efe67')
    // },{
    //     $set: {
    //         completed : true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b78edb776b8500ea74f6ce7')
    },{
        $set: {
            name: 'Ankit Raj'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => { 
        console.log(result);
    });
    client.close();
});