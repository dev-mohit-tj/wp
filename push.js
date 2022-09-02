var push = require('web-push')
// let vapidkeys = push.generateVAPIDKeys();
// console.log(vapidkeys);
let vapidkeys = {
    publicKey: 'BH3ByVb8m14fbu39YsdxHlSFJQVCmmzasnbd-UmEHD2EQqcjtH9hr7ngYjMlMtyjbLlF08Wm6qfKGaYYd8G-LX0',
    privateKey: 'aahIn_nostvEOo8oc13KcOLRJ2m1kLawGns-7EzW4V4'
  };

  push.setVapidDetails('mailto:mohit@tech.com',vapidkeys.publicKey, vapidkeys.privateKey);

  let subscribed = {
    endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABjEgRVqhq6SkMBio5uc5csUZRFknIuYF2IfEDYn8SFDPa6mHoowPB_kf2iDVwIkfEKt6X_y9EkTgzy9sZE-utXcMqVYiSzIonWqWa_rkoICXjv17dZ-woFoLdfmlk5uKg-qz4RPzNphTywEkHFkFw0aR6HmvfS8Ud3TtFuEFLHYF-3HXU",
    expirationTime:null,
    keys:{
        p256dh: "BK2p3ifQ2fyYGMvznxz_RrS0tvIxw0HFyJOodQBAtMraROZxUKv4aw3EgP7muPWJf2lXbNDmBIalT9yx4As4EPM",
        auth:"-LGAwS9qfS_8xSC8VKVTRA"
    }
    // {"endpoint":"https://fcm.googleapis.com/fcm/send/ecZplj2d8fQ:APA91bHMgDVpV-Adp2MrWnVeA4lteJhiBv9DmAaj7CLU4Zr2u6AGgWjKPzt-Qda1DferDO3deH_26oZZrZfYsf0xMPGevSrksqpYE8q1KMxFoPFkHvkuEA-98SQmIIvjGl0IVu5KCW7R","expirationTime":null,"keys":{"p256dh":"BIP_BAYYNbFF2HcTDjO_Fom2s7FMV0oMo-HX9cEzaQ1l1Z-8lfWMMKUTAbnEIEJ911B91QEU7_Dd7aqN-joDJe4","auth":"Jdq5gpK-aMA7szUjndLJnw"}}
  };

  push.sendNotification(subscribed,"hiiiii")