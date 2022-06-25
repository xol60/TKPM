const Product=require('../models/Product')
class ProductController {
    list(req, res) {
        Product.find({})
        .lean()
        .then(products=>{
            res.render("products/list",{data:req.session,product:products}
            );
        })
    }
    lock(req,res){
        Product.findById(req.params.id)
        .then(product=>{
            if (product.lock==false)
            {
                product.lock=true;
            }
            else
            {
                product.lock=false;
            }
            Product.updateOne({ _id: req.params.id }, product)
            .then(() => res.redirect('/product/list'))
        })
    }
    add(req,res){
        const product = new Product(req.body);
        product.trend=false;
        product.lock=false;
        product.slug=product._id;
        product
            .save()
            .then(()=>res.redirect('/product/list')) 
    }
}

module.exports = new ProductController();