var push = require('web-push')
// let vapidkeys = push.generateVAPIDKeys();
// console.log(vapidkeys);
let vapidkeys = {
    publicKey: 'BH3ByVb8m14fbu39YsdxHlSFJQVCmmzasnbd-UmEHD2EQqcjtH9hr7ngYjMlMtyjbLlF08Wm6qfKGaYYd8G-LX0',
    privateKey: 'aahIn_nostvEOo8oc13KcOLRJ2m1kLawGns-7EzW4V4'
  };

  push.setVapidDetails('mailto:mohit@tech.com',vapidkeys.publicKey, vapidkeys.privateKey);

  let subscribed = {}; 

  push.sendNotification(subscribed, 'hello from mohit')