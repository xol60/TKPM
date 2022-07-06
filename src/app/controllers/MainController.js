class MainController {

    show(req, res) {
        if(req.session.admin){
           
         res.render('main/zero',{data:req.session});
        }
        else
        {
            res.redirect('/admin/login')
        }
            
    }
}

module.exports = new MainController();