const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Order = new Schema({
     status: { type: String,require:true},
     address: { type: String,require:true},
     phonenumber: { type: String,require:true},
     note: { type: Boolean,require:true},
     book: { type: String,require:true},
     delivery: { type: Date},
     total: { type: Number},
     id_customer: { type: String,require:true},
})
module.exports=mongoose.model('Order',Order);