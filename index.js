console.log("The bot is starting");

var Twit=require('twit');

var config=require('./config');
var T = new Twit(config);

var params={
    q:'Fortnite',
    count:5
};          //parameters for searching tweets

T.get('search/tweets', params , gotData);

function gotData(err,data, response) //callback function
{
    var tweets=data.statuses;
    for(var i=0;i<tweets.length;i++)
    {
        console.log(tweets[i].text);
        console.log('-----------------------------------------------');
    }
    
}