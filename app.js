//Application dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const quiz_route = require('./routes/quizes')
const add_route = require('./routes/add')
const app = express()
const router = express.Router()
const dbURI = "mongodb://localhost/quizes"

//Application config
app.use(express.json())
app.use('/quizes', quiz_route)
app.use('/add', add_route)
app.use(express.static(path.join(__dirname, 'views')))
app.use('/images', express.static('images'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.listen(process.env.PORT || 2400, (req, res) => {
    console.log('Server started : 2400')
})


//Database config
mongoose.connect(process.env.MONGODB_URI|| dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

module.exports = router