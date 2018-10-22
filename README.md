# GymFriend Facebook Bot

A Facebook bot that's a workout buddy! As of October 22, 2018, this bot can help suggest a workout and help the user time certain parts of their workouts.

## Inspiration

At the end of my workouts, I like to do stretches and hold each one for some time. I would pick up my phone after each stretch, turn off the timer, and then reset the timer back to 1 min and 30 seconds. The process was a bit tedious, so I was inspired to make this bot! I wanted something that could notify me when a certain time period ended. I decided to make a bot instead of an app for two reasons.

First, I regularly have Messenger chat heads on my phone and the chat heads are still visible when I'm using my music app during my workout. Switching between the timer app and music app frequently is not ideal.

Second, I didn't want to have to pick up my phone to reset a timer. Getting a single message notification at the end of the time period allowed me to seamlessly transition from one stretch to another without having to touch my phone.

## Screenshots

![Screenshot](https://raw.githubusercontent.com/tranjocelyn/gym-friend/master/img/GymFriend_prompt.jpg)
![Screenshot](https://raw.githubusercontent.com/tranjocelyn/gym-friend/master/img/GymFriend_1.jpg)
![Screenshot](https://raw.githubusercontent.com/tranjocelyn/gym-friend/master/img/GymFriend_2.jpg)

## Tech Used

Node.js
Express
ngrok
[fb-bot-framework](https://www.npmjs.com/package/fb-bot-framework)
Facebook for Developers
[Privacy Policy Creator] (https://www.freeprivacypolicy.com)

## Reflections

I learned a lot of new tech while making this bot! This was the first time I've worked with Express, ngrok, npm, and Facebook for Developers. One problem I ran into while making this bot involved sending messages at fixed time intervals with setTimeout. I have't used Javascript to a great extent, so while looking into a way to send timed messages I found out that JS is not multi-threaded. To solve my main problem, I had to figure out a way to allow some scheduling of code execution and I ended up using setTimeout. It was interesting because setTimeout actually takes in an anonymous function to work properly. Before I knew that, I was passing in a non anonymous function as a parameter and the code didn't work.

## Future Extensions

- allow user to specify time interval, instead of hard coding it to 1 min and 30 seconds
- add more workout plans to suggest to the user
