// var config = {
//    apiKey: "AIzaSyCfzPkYsLtY1adV3U5ZLqrCm0soAFYJUFk",
//    projectId: "eye-2017",
//    storageBucket: "",
//    messagingSenderId: "752359854545"
// };

// var accountSid = 'ACfce496f254e2545a7b8251b1d7537302'; // Your Account SID from www.twilio.com/console
// var authToken = '1e90c12a9ff2bfd7c7279d999975f7b1';   // Your Auth Token from www.twilio.com/console

// var twilio = require('twilio'),
// client = twilio(accountSid, authToken);
// // cronJob = require('cron').CronJob;

// // var numbers = ['+14254453074', '+16788231926'];
// var numbers = ['+14254453074'];

// //for( var i = 0; i < numbers.length; i++ ) {
// //    client.messages.create({
// //        body: 'no more yo',
// //        to: numbers[i],  // Text this number
// //        from: '+12064830490' // From a valid Twilio number
// //    })
// //    .then((message) => console.log(message.sid));
// //}

// var express = require('express'),
// bodyParser = require('body-parser'),
// app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// var server = app.listen(8000, function() {
//     console.log('Listening on port %d', server.address().port);
// });

// // var Firebase = require('firebase'),
// // usersRef = new Firebase('https://safecheck-2017.firebaseio.com/users/');
// //var database = firebase.database();

// //var numbers = [];
// //usersRef.on('child_added', function(snapshot) {
// //numbers.push( snapshot.val() );
// //  console.log( 'Added number ' + snapshot.val() );
// //});

// app.post('/message', function (req, res) {
//     client.messages.create({
//         to: '+14254453074',
//         from: '+12064830490',
//         body: 'work'
//     }).then((message) => console.log(message.sid));
// });





// function twilio() {
//     $().mouseenter(function () {
//         setTimeout(function () {
//             var twilio = require("twilio");
//             var client = new twilio('ACfce496f254e2545a7b8251b1d7537302','1e90c12a9ff2bfd7c7279d999975f7b1');
//             client.messages.create({
//                 to: '+14254453074',
//                 from: '+12064830490',
//                 body: 'british born christian'
//             }).then((messsage) => console.log(message.sid));
//         }, 5000);
//     }).mouseleave(function () {
//     //alert('finish');
//     });
// }



// jQuery(function($) {
//     $('#my_img').click(function() {
//         var twilio = require("twilio");
//         var client = new twilio('ACfce496f254e2545a7b8251b1d7537302','1e90c12a9ff2bfd7c7279d999975f7b1');
//         client.messages.create({
//             to: '+14254453074',
//             from: '+12064830490',
//             body: 'british born christian'
//         }).then((messsage) => console.log(message.sid));
//         //Write your js than you want to run on click like alert or something else})
// });
// }


// $(document).ready(function(){
// function twilio() {
//     var twilio = require("twilio");
//     var client = new twilio('ACfce496f254e2545a7b8251b1d7537302','1e90c12a9ff2bfd7c7279d999975f7b1');
//     client.messages.create({
//         to: '+918178787285',
//         from: '+919958917988',
//         body: 'work'
//     }).then((messsage) => console.log(message.sid));
// };

// twilio();
// });

// twilio();

// function twilio() {
//     // Require the twilio and express modules
//     var twilio = require('twilio'),
//     express = require('express');
//     // Create an express application
//     var app = express();
//     app.get('/', function(req, res) {
//     // Replace these two arguments with your own account SID and auth token:
//         var TWILIO_ACCOUNT_SID = 'ACfce496f254e2545a7b8251b1d7537302';
//         var TWILIO_AUTH_TOKEN = '1e90c12a9ff2bfd7c7279d999975f7b1';
//         var capability = new twilio.Capability(
//             process.env.TWILIO_ACCOUNT_SID,
//             process.env.TWILIO_AUTH_TOKEN
//         );
//         // Give the capability generator permission to make outbound calls
//         capability.allowClientOutgoing('APzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
//         // Render an HTML page which contains our capability token
//         res.render('index.html', {
//             token:capability.generate()
//         });
//     });
// }

//twilio();

// function twilio() {
//     alert("hello");
// }