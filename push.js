var push = require('web-push')
// let vapidkeys = push.generateVAPIDKeys();
// console.log(vapidkeys);
let vapidkeys = {
    publicKey: 'BH3ByVb8m14fbu39YsdxHlSFJQVCmmzasnbd-UmEHD2EQqcjtH9hr7ngYjMlMtyjbLlF08Wm6qfKGaYYd8G-LX0',
    privateKey: 'aahIn_nostvEOo8oc13KcOLRJ2m1kLawGns-7EzW4V4'
  };

  push.setVapidDetails('mailto:mohit@tech.com',vapidkeys.publicKey, vapidkeys.privateKey);

  let subscribed = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dSf1w4jPors:APA91bFTxPSMQey0mP03xfK7YhxTqClBdt1gw0KGmiH7P-V0k_ZPlm7PoLkLOz9pMIiZhqOn4STCoZj5CgkWZOZCNMfJAmhNUSkqsAp38rYvyt88uUyVtoSuu3jKNLx8rTRbxWL4Qz_j",
    expirationTime:null,
    keys:{
        p256dh: "BLDdtota7RBEUaU0BCvhP47vAEhy3beEUJUvMHiQ_rq8adBqCKy0c6pKbHjELnZdqD_UNoeZrJcweY7lbFUx1EM",
        auth:"nF70gc_ROohMUhpmZZRtQQ"
    }
    // {"endpoint":"https://fcm.googleapis.com/fcm/send/ecZplj2d8fQ:APA91bHMgDVpV-Adp2MrWnVeA4lteJhiBv9DmAaj7CLU4Zr2u6AGgWjKPzt-Qda1DferDO3deH_26oZZrZfYsf0xMPGevSrksqpYE8q1KMxFoPFkHvkuEA-98SQmIIvjGl0IVu5KCW7R","expirationTime":null,"keys":{"p256dh":"BIP_BAYYNbFF2HcTDjO_Fom2s7FMV0oMo-HX9cEzaQ1l1Z-8lfWMMKUTAbnEIEJ911B91QEU7_Dd7aqN-joDJe4","auth":"Jdq5gpK-aMA7szUjndLJnw"}}
  };

  push.sendNotification(subscribed,"hiiiii")