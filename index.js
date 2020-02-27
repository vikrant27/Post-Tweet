const Twitter = require("twitter");
require('dotenv').config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

client.post('statuses/update', {status: 'Working on Node.js and MongoDb!'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
  	console.log(error);
    throw error;
  });