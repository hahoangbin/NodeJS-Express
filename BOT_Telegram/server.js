
const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))

const axios = require('axios')

// DB mongoDB
const db = require('./config/db')
// connect to DB
db.connect()
// Models 
const order = require('./models/Order')

app.post('/orders', function(req, res) {
    var stringFromServer = JSON.stringify(req.body)
    stringFromServer = stringFromServer.substring(2)
    stringFromServer = stringFromServer.replace('}\\uoooo":""', '')
    stringFromServer = stringFromServer.replace(/\\/g, '')
    var json = JSON.parse(stringFromServer)
    json.orders.forEact(function(od) {
        var orderType = "SELL"
        if(order.direction != "1") {
            orderType = "BUY"
        }
        const newOrder = new order({
            ticket:    od.ticket,
            pair:      od.pair,
            direction: odType,
            lot:       od.lot,
            price:     od.price,
            sl:        od.sl,
            tp:        od.tp,
            timeopen:  od.timeopen,
            comment:   od.comment,
        })
        // Luu du lieu vao DB
        newOrder.save()
          .then(savedInstance => {
            // Telegram: 6197001484:AAG4zSxlkrUTJC2M5tKPidmF6IrPIe0cOb4 @BotSendCommandMQL4_bot
            // group chat id: -943287989
            // API: https://api.telegram.org/bot<YourBOTToken>/getUpdates  
            // Send telegram: https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={chat_id}&text={notification_text}
    
            var messageSendTelegram = `New order \n ${newOrder.ticket} \n ${newOrder.pair} \n ${newOrder.direction} \n ${newOrder.price}`
            var url = `https://api.telegram.org/bot6197001484:AAG4zSxlkrUTJC2M5tKPidmF6IrPIe0cOb4/sendMessage?chat_id=-943287989&text=${messageSendTelegram}`
            axios.post(url)
              .then((res) => {console.log('Send to telegram successfully!');})
              .catch((e) => {console.log(e);})

            console.log('Dữ liệu đã được lưu:', savedInstance);
          })
          .catch(error => {
            console.error('Lỗi khi lưu dữ liệu:', error);
          });
    })
    console.log(json)
    res.end()
})


app.get('/', function(req, res) {
    res.send('Hello !')
})