const db = require('./queries');
const seedData = require('./comments.json');

db.seedDb(seedData.comments);