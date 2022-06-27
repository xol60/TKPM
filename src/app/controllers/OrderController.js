const Order=require('../models/Order')
class OrderController {
    list(req, res) {
        Order.find({})
        .lean()
        .then(orders=>{
            var not=[]
            var delivering=[]
            var delivered=[]
            for(let i =0;i<orders.length;i++)
            {
                if(orders[i].status=='not')
                {
                    not.push(orders[i])
                }
                else{
                    if(orders[i].status=='delivering')
                    {
                        delivering.push(orders[i])
                    }
                    else{
                        delivered.push(orders[i])
                    }
                }
            }
            res.render("orders/list",{data:req.session,onot:not,odelivering:delivering,odelivered:delivered}
            );
        })
    }
    update(req,res){
       Order.findById(req.params.id)
       .then(order=>{
            if(order.status=='not')
            {
                order.status='delivering'
            }
            else{
                order.status='delivered'
                var today = new Date();
                order.delivery=today;
            }
            Order.updateOne({ _id: req.params.id }, order)
            .then(() => res.redirect('/order/list'))
       })
    }
}

module.exports = new OrderController();