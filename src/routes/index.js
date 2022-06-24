const adminRouter=require('./admin.js')
const mainRouter=require('./main.js')
function route(app) {
    app.use('/admin',adminRouter)
    app.use('/',mainRouter);
}

module.exports = route;