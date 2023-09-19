const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request.get(url, (error, response, body) => {
    if (error){
        console.log(error);
    }else {
        fs.writeFile(path, body, 'utf-8', (writeError) => {
            if (writeError){
                console.log(writeError)
            }
        })
    }
})
