const Customer=require('../models/Customer')
class CustomerController {
    list(req, res) {
        Customer.find({})
        .lean()
        .then(customers=>{
            res.render("customers/list",{data:req.session,customer:customers}
            );
        })
    }
    lock(req,res){
        Customer.findById(req.params.id)
        .then(customer=>{
            if (customer.lock==false)
            {
                customer.lock=true;
            }
            else
            {
                customer.lock=false;
            }
            Customer.updateOne({ _id: req.params.id }, customer)
            .then(() => res.redirect('/customer/list'))
        })
    }

}

module.exports = new CustomerController();