const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id : 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log(decoded);
// var msg = 'Hi there';
// var hash = SHA256(msg).toString();
// console.log(`Message : ${msg}`);
// console.log(`Hash : ${hash}`);

// var data = { 
//     id: 4
// };

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + "somesecret").toString()
// };

// // this is called JWTs
// data.id = 5;
// token.has = SHA256(JSON.stringify(data)).toString();

// var res = SHA256(JSON.stringify(token.data) + "somesecret").toString();

// if(token.hash === res){
//     console.log('Data was not changed');
// }
// else{
//     console.log('Data was changed');
// }