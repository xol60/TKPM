const Admin=require('../models/Admin')
var nodemailer = require('nodemailer');

const option = {
    service: 'gmail',
    auth: {
        user: 'ptudwshop20212022@gmail.com', // email hoặc username
        pass: 'Leminhduc0505@' // password
    }
};
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
    lock(req,res){
        Admin.findById(req.params.id)
        .then(admin=>{
            if (admin.lock==false)
            {
                admin.lock=true;
            }
            else
            {
                admin.lock=false;
            }
            Admin.updateOne({ _id: req.params.id }, admin)
            .then(() => res.redirect('/admin/list'))
        })
    }
    logout(req,res){
        req.session.destroy();
        res.redirect('/admin/login');
    }
    forgot(req,res){
        console.log(555)
        res.render('admins/forgot');
    }
    change(req,res){
        var e=req.body.email;
        console.log(555)
        Admin.find({email:e})
        .lean()
        .then(admin=>{
            console.log(admin)
                var pass = "";
                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                       
                        for (var i = 0; i < 8; i++)
                          pass += possible.charAt(Math.floor(Math.random() * possible.length));
                    
                        var transporter = nodemailer.createTransport(option);
                        transporter.verify(function(error, success) {
                            // Nếu có lỗi.
                            if (error) {
                                console.log(error);
                            } else { //Nếu thành công.
                                console.log('Kết nối thành công!');
                            }
                        });
                        var mail = {
                            from: 'ptudwshop20212022@gmail.com', // Địa chỉ email của người gửi
                            to: admin[0].email, // Địa chỉ email của người gửi
                            subject: 'Đặt lại mật khẩu', // Tiêu đề mail
                            text: 'Mật khẩu mới của bạn là '+pass, // Nội dung mail dạng text
                        };
                        //Tiến hành gửi email
                        transporter.sendMail(mail, function(error, info) {
                            if (error) { // nếu có lỗi
                                console.log(error);
                            } else { //nếu thành công
                                console.log('Email sent: ' + info.response);
                            }
                        });
                admin[0].password=pass;
                var sess=req.session;
                sess.forgot=1;
                Admin.updateOne({ _id: admin[0]._id }, admin[0])
                .then(() => {
                    res.redirect('/admin/login',{false:req.session})})
            })
    }
 }

module.exports = new AccountsController();