const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Admin = new Schema({
     username: { type: String,require:true},
     password: { type: String,require:true},
     address: { type: String,require:true},
     name: { type: String,require:true},
     email: { type: String,require:true},
     avatar: { type: String,require:true},
     rank: { type: Int32,require:true},
     lock: { type: Boolean,require:true},
})
module.exports=mongoose.model('Admin',Admin);