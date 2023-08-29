
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bot_telegram_dev'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect fail!!!', error);
    }
}

module.exports = { connect }
