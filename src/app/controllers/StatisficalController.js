const Customer=require('../models/Customer')
class StatisficalController {
    show(req, res) {
        res.render('statisticals/show',{data:req.session});
    }
    
}

module.exports = new StatisficalController();