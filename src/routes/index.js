const adminRouter=require('./admin.js')
const customerRouter=require('./customer.js')
const productRouter=require('./product.js')
const commentRouter=require('./comment.js')
const orderRouter=require('./order.js')
const mainRouter=require('./main.js')
function route(app) {
    app.use('/admin',adminRouter)
    app.use('/customer',customerRouter)
    app.use('/product',productRouter)
    app.use('/comment',commentRouter)
    app.use('/order',orderRouter)
    app.use('/',mainRouter);
}

module.exports = route;