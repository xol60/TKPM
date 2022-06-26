const Customer=require('../models/Customer')
class StatisficalController {
    show(req, res) {
        var sta=1;
        res.render('statisticals/show',{data:req.session,statistical:sta});
    }
    
}

module.exports = new StatisficalController();