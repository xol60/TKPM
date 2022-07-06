const Customer=require('../models/Customer')
const Order=require('../models/Order')
class StatisficalController {
    show(req, res) {
        var sta=1;
        Order.find({status:"delivered"})
        .lean()
        .then(orders=>{
                var m1=0;
                var m2=0;
                var m3=0;
                var m4=0;
                var m5=0;
                var m6=0;
                var m0=0;
                for (let i=0;i<orders.length;i++)
                {
                    if(orders[i].delivery.getMonth()==1)
                    {
                        m1+=orders[i].total
                    }
                    if(orders[i].delivery.getMonth()==2)
                    {
                        m2+=orders[i].total
                    }
                    if(orders[i].delivery.getMonth()==3)
                    {
                        m3+=orders[i].total
                    }
                    if(orders[i].delivery.getMonth()==4)
                    {
                        m4+=orders[i].total
                    }
                    if(orders[i].delivery.getMonth()==5)
                    {
                        m5+=orders[i].total
                    }
                    if(orders[i].delivery.getMonth()==6)
                    {
                        m6+=orders[i].total
                    }
                    if(orders[i].delivery.getMonth()==0)
                    {
                        m0+=orders[i].total
                    }
                }
                res.render('statisticals/show',{data:req.session,statistical:sta,o1:m1,o2:m2,o3:m3,o4:m4,o5:m5,o6:m6,o0:m0});
        })
       
    }
    
}

module.exports = new StatisficalController();