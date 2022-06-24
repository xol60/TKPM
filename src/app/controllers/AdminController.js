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
    info(req,res)
        {
            res.render('admins/info',{data:req.session});
        }
    update(req,res)
    {
        if(req.body.password!=req.body.password2)
        {
            var wmessage="Mật khẩu nhập lại không đúng"
            res.render('admins/info',{data:req.session,message:wmessage});
        }
        else
        {
        Admin.findById({ _id : req.session.admin._id } )
            .then((admin) => {
                admin.name=req.body.name;
                admin.password=req.body.password;
                admin.address=req.body.address;
                admin.avatar=req.body.avatar;
                admin.email=req.body.email;
                Admin.updateOne({_id:admin._id},admin)
                .then(()=>{
                    req.session.admin=admin;
                res.redirect('/admin/info')})
                })
        }
    }
    list(req,res){
        Admin.find({})
             .lean()
             .then(admins=>{
                 res.render("admins/list",{data:req.session,admin:admins}
                 );
             })
    }
 }
module.exports = new AccountsController();