"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.helloworld = functions.https.onRequest((req, res) => {
    res.send(`Hello ${req.query.name}`);
});
//# sourceMappingURL=index.js.map