const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const cors = require('cors')({
  origin: true,
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  cors(request, response, () => {
    response.status(200).send({test: 'Hello World'});
  })
});
