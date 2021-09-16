const { twitConfig } = require("./helpers/config.js");
const db = require("./helpers/db.js");
var Twit = require("twit");

var T = new Twit(twitConfig);

console.log(db);
