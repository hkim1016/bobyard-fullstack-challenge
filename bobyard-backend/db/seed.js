const db = require('./queries');
const seedData = require('./comments.json');
const seedData2 = require('./comments2.json');

db.seedDb(seedData2.comments);