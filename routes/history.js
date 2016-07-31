var express = require('express');
var History   = require('../models/history');
var router = express.Router();

router.get('/', function(req, res, next) {

    History.find({}, function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
    
}).put('/', function(req, res, next) {

    var history = new History({
        vid: req.body.vid,
        url: req.body.url,
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        description: req.body.description
    });

    history.save(function(err) {
        if (err) throw err;
        res.json({ success: true, history: history });
    });
    
}).delete('/:id', function(req, res, next) {

    History.find({ vid:req.params.id }).remove(function(err){
        if (err) throw err;
        res.json({ success: true });
    });
    
});

module.exports = router;
