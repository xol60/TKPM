
const mainRouter=require('./main.js')
function route(app) {
    app.use('/',mainRouter);
}

module.exports = route;