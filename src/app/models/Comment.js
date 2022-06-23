const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = new Schema({
     id_customer: { type: String,require:true},
     nameuser: { type: String,require:true},
     lock: { type: String,require:true},
     message: { type: String,require:true},
})
module.exports=mongoose.model('Comment',Comment);