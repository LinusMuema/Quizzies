const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//Get all quizes
router.get('/', (req, res) => {
    res.json({message: 'Success'})
})

module.exports = router