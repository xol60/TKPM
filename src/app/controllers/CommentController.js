const Comment=require('../models/Comment')
const Product=require('../models/Product')
const Customer=require('../models/Customer')
class CommentController {
    list(req, res) {
        Product.find({})
        .lean()
        .then(products=>{
            res.render("comments/list",{data:req.session,product:products}
            );
        })
    }
    check(req,res){
        Comment.find({id_product:req.params.id})
        .lean()
        .then(comments=>{
            Product.findById(req.params.id)
            .then(pr=>{
                res.render("comments/detail",{data:req.session,comment:comments,product:pr}
            );
            })
        })
    }
}

module.exports = new CommentController();