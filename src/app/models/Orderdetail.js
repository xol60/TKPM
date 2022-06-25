const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product_Order = new Schema({
     id_product: { type: String,require:true},
     id_order: { type: String,require:true},
})
module.exports=mongoose.model('Product_Order',Product_Order);