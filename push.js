var push = require('web-push')
// let vapidkeys = push.generateVAPIDKeys();
// console.log(vapidkeys);
let vapidkeys = {
    publicKey: 'BH3ByVb8m14fbu39YsdxHlSFJQVCmmzasnbd-UmEHD2EQqcjtH9hr7ngYjMlMtyjbLlF08Wm6qfKGaYYd8G-LX0',
    privateKey: 'aahIn_nostvEOo8oc13KcOLRJ2m1kLawGns-7EzW4V4'
  };

  push.setVapidDetails('mailto:mohit@tech.com',vapidkeys.publicKey, vapidkeys.privateKey);

  let subscribed = {"endpoint":"https://fcm.googleapis.com/fcm/send/cb_Zcjm0i8E:APA91bHj7iPSlRkRB9lNcp1gkENXBcTsAedE81N1mpGizTwQlfNBYddz_o7BYPBL65x0RfsO13RAkR-wEI9cUUE4J-jfDbuj7Ivnrq1d6XDbPACOSXyKfsnaai6g2NUXHWSBpiY4M4EZ","expirationTime":null,"keys":{"p256dh":"BJL2zJlRqTekkRYW6oXCQd7FBXxPlBfUhbksHlbYg9_BgeeUWX1b4B5UDB4Aw1b4D6yPOkt4D5j_jMh8cZHlco0","auth":"68ISzqZbJwlGSz4LG_zxsw"}}; 

  push.sendNotification(subscribed, 'hello from mohit')