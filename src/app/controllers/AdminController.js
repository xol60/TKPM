const Admin=require('../models/Admin')
class AccountsController {
    login(req, res) {
        res.render('admins/login');
    }   
    check(req,res){

        var sessData = req.session;

        Admin.find({username:req.body.username,password:req.body.password})
        .lean()
        .then(account =>{
          if(account.length>=1)
          {
                sessData.admin=account[0];
                res.redirect('/');
                return;
          }
          else
          {
            sessData.nologin=1
          }
            res.render('admins/login',{false:req.session});
            req.session.destroy();
        })
    }
 }
module.exports = new AccountsController();