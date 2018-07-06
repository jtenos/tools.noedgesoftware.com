import * as functions from 'firebase-functions';

export const helloworld = functions.https.onRequest((req, res) => {
   
   res.send(`Hello ${req.query.name}`);
    
});
