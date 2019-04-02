const md5 = require('md5');

const hash = process.argv[2];
if(hash == null){
    console.log('usage: node index.js somestring');
}
 else {
    console.log(md5(hash));
}