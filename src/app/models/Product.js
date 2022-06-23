const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = new Schema({
     name: { type: String,require:true},
     image: { type: String,require:true},
     amount: { type: Int32,require:true},
     detail: { type: String,require:true},
     price: { type: Int32,require:true},
     lock: { type: Boolean,require:true},
     origin: { type: String,require:true},
     trend: { type: Boolean,require:true},
})
module.exports=mongoose.model('Product',Product);