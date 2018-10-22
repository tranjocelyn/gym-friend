var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');

// Initialize
var bot = new FBBotFramework({
page_token: "",
verify_token: ""
});

// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());

// Functions for sending timed messages
function sendTimedMessage(userId, message, seconds) {
    setTimeout( function() {sendMessage(userId, message) }, seconds);
}
function sendMessage (userId, message) {
    bot.sendTextMessage(userId, message);
}

// Setup listener for incoming messages
bot.on('message', function(userId, message){
    //bot.sendTextMessage(userId, "What can I help you with today?");

    // Send quick replies
    var replies = [
        {
            "content_type": "text",
            "title": "Decide on a work out",
            "payload": "work_out"
        },
        {
            "content_type": "text",
            "title": "Time my stretches",
            "payload": "timing"
        }
    ];
    bot.sendQuickReplies(userId, "What can I help you with today?", replies);
});

// Setup listener for quick reply messages
bot.on('quickreply', function(userId, payload){
    if (payload == "work_out") {
        bot.sendTextMessage(userId, "You should do an ab workout today!");
    } else if (payload == "timing") {
        bot.sendTextMessage(userId, "Okay, I will start timing 1min 30sec intervals starting now.");
        sendTimedMessage(userId, "1min 30 sec have passed.", 5000)
        sendTimedMessage(userId, "1min 30 sec have passed.", 50000)
    }
});

/*
// Config the Get Started Button and register a callback
bot.setGetStartedButton("GET_STARTED");
bot.on('postback', function(userId, payload){

    if (payload == "GET_STARTED") {
        getStarted(userId);
    }

    // Other postback callbacks here
    // ...

});

function getStarted(userId){

    // Get started process
}

// Setup listener for attachment
bot.on('attachment', function(userId, attachment){

    // Echo the audio attachment
    if (attachment[0].type == "audio") {
        bot.sendAudioAttachment(userId, attachment[0].payload.url);
    }

});
*/

app.get("/", function (req, res){
res.send("hello world");
});

//Make Express listening
app.listen(3000);