const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product_Comment = new Schema({
     id_product: { type: String,require:true},
     id_comment: { type: String,require:true},
})
module.exports=mongoose.model('Product_Comment',Product_Comment);