console.log("The bot is starting");

var Twit=require('twit');

var config=require('./config');
var T = new Twit(config);

var stream=T.stream('user');
stream.on('follow',followed);

function followed(eventMsg)
{
    var name=eventMsg.source.name;
    var screenName=eventMsg.source.screen_name;
    tweetIt('@'+screenName+' thanks for following me')
}

function tweetIt(txt)
{
    var tweet={
    status:txt
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