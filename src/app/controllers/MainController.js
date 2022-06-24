class MainController {

    show(req, res) {
            res.render('main/zero',{data:req.session});
    }
}

module.exports = new MainController();