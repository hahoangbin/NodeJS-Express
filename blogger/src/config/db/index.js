
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/top_dev');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect fail', error);
    }
}

module.exports = { connect }