const axios = require('axios');

const repository = process.argv[2];

if(repository == null){
    console.log('usage: node index.js https://api.github.com/repos/axios/axios');
} else {
    axios.get(repository)
        .then(res => {
            const issues = res.data.open_issues_count;
            console.log(issues + ' issue(s)');
        })
        .catch(err => {
            console.log(`Code error: ${err.response.status}, Error status: ${err.response.statusText}`);
        });
}

