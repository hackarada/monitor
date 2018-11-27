const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
var request = require('request');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const readline = require('readline');
const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios')


const app = express();
const port = process.env.PORT || 9000;


var array = fs.readFileSync('list.data').toString().split("\n");

async function check(Tline) {

}


app.listen(port, () => {
    console.log('live on ' + port);
});









for (i in array) {
       console.log("Tline");

    console.log(array[i]);



request(array[i], function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
        //  console.log(html); 
          console.log($('extract').attr('img'))
      }
});




//     const options = {
//         uri: "https://www.facebook.com/",
//         transform: function(body) {
//             return cheerio.load(body);
//         }
//     };
//     rp(options)
//         .then(($) => {
//             console.log($('extract').attr('img'))
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// console.log(array[i]);        
}


// axios.post('https://hooks.slack.com/services/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', {
//         text: 'I hope this works -check statusCode'})
// .then((res) => {
//  console.log('statusCode:', res.status)
//  // console.log(res)
// })
// .catch((error) => {
//  console.error(error)
// })