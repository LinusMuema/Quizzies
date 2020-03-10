const express = require('express')
const mongoose = require('mongoose')
const pug = require('pug')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('add')
})

module.exports = router