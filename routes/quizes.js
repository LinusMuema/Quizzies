const express = require('express')
const quizes = require('../models/quiz')
const router = express.Router()

//Get all quizes
router.get('/', (req, res) => {
    quizes.find()
    .then((response) => {res.json({message: 'success', questions: response})})
    .catch((err) => {res.status(400).json({message: 'error', err})})
})
module.exports = router