console.log("The bot is starting");

var Twit=require('twit');

var config=require('./config');
var T = new Twit(config);

tweetIt();
setInterval(tweetIt,1000*60);
function tweetIt()
{
    var r=Math.floor(Math.random()*100);

    var tweet={
    status:'Number '+ r+' tweet through node.js'
}   
           //your tweet

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
}