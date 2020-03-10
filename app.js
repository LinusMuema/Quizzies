require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = express.Router()

app.use(express.json())
app.listen(process.env.PORT || 2400, (req, res) => {
    console.log('Server started : 2400')
})

module.exports = router