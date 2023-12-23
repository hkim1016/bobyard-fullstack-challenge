const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const db = require('../db/queries');

router.get('/', (req, res, next) => {
    console.log('GETTING');
    db.getAllComments(req, res);
});

router.post('/', (req, res, next) => {
    console.log('POSTING', req.body);
    db.createComment(req, res);
});

router.delete('/:id', (req, res, next) => {
    console.log('DELETEING', req.body, req.params);
    db.deleteComment(req, res);
});

router.patch('/:id', (req, res, next) => {
    console.log('UPDATING', req.body, req.params);
    db.updateComment(req, res);
});



module.exports = router;