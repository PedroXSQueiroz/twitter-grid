class TwitterClient{
    
    getTweets = async function(userName, tweetsCount){
        
        var getTweetsUrl = 'http://localhost:7890/1.1/statuses/user_timeline.json?count=' + tweetsCount + ' &screen_name=' + userName

        var getTweetsRequest = new Request(getTweetsUrl);

        var tweets = await fetch(getTweetsRequest).then(response => response.json());

        return tweets;
    }
}