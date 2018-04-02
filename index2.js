console.log("The bot is starting");

var Twit=require('twit');

var config=require('./config');
var T = new Twit(config);

var tweet={
    status:'First tweet through node.js'
};              //your tweet

T.post('statuses/update', tweet,tweeted);



function tweeted(err, data, response) {
    if(err)
    {
        console.log('Tweet not sent');
    }
    else{
        console.log('Tweet sent successfully');
    }
  }             //callback function