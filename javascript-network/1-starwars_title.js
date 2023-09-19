#!/usr/bin/node
const id = process.argv[2];
const request = require('request');

const url = `https://swapi-api.alx-tools.com/api/films/${id}`

request.get(url, (error, response, body) =>{
    if (error){
        console.error(error.message);
    }else if (response.statusCode !== 200){
        console.error(response.statusCode);
    }else{
        try {
            const movieTitle = JSON.parse(body);
            console.log(`${movieTitle.title}`);
        }catch(parseError){
            console.error(parseError.message);
        }
    }
})
