import * as functions from 'firebase-functions';

export const helloworld = functions.https.onRequest((req, res) => {
   
   response.send(`Hello ${req.query.name}`);
    
});
