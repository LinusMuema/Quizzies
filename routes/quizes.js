const express = require('express')
const mongoose = require('mongoose')
const quizes = require('../models/quiz')
const router = express.Router()

//Get all quizes
router.get('/', (req, res) => {
    quizes.find()
    .then((response) => {res.json({message: 'success', questions: response})})
    .catch((err) => {res.status(400).json({message: 'error', err})})
})

router.post('/', (req, res) => {
    let quiz = new quizes({
        question: req.body.question,
        answers: req.body.answers
    }).save()
    .then((response) => {res.json({message: 'success', quiz: response})})
    .catch((err) => {res.status(400).json({message: 'error', err})})
})
module.exports = router