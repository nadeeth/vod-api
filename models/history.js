// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('History', new Schema({ 
    vid: { index: true, type: String, required: true },
    title: { index: true, type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    thumbnail: { type: String, required: true }
}));