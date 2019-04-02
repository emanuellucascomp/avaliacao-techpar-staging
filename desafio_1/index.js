const reverse = require('./reverse');
 
const wordReceived = process.argv[2];
if(wordReceived == null){
    console.log('usage: node index.js somestring');
}
 else {
    console.log(reverse(wordReceived));
}
