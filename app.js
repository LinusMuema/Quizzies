//Application dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./routes/quizes')
const router = express.Router()
const dbURI = "mongodb://localhost/quizes"

//Application config
app.use(express.json())
app.use('quizes', route)
app.listen(process.env.PORT || 2400, (req, res) => {
    console.log('Server started : 2400')
})


//Database config
mongoose.connect(process.env.MONGODB_URI|| dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

module.exports = router