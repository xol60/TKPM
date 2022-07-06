const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://2:1@newcluster.o74ma.mongodb.net/YCPM?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };