const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customer = new Schema({
     name: { type: String,require:true},
     avatar: { type: String,require:true},
     email: { type: String,require:true},
     lock: { type: Boolean,require:true},
     password: { type: String,require:true},
     username: { type: String,require:true},
     address: { type: String,require:true},
})
module.exports=mongoose.model('Customer',Customer);