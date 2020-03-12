const express = require('express')
const quizes = require('../models/quiz')
const router = express.Router()
const bodyParser = require('body-parser')
const parser = bodyParser.urlencoded({extended: false});

router.get('/', (req, res) =>{
    res.render('add')
})

router.post('/', parser, (req, res) => {
    let question = req.body.question;
    let option_one = `{"option":${req.body.option_one}, "value":${(req.body.answer_one == 'true')}}`
    let option_two = `{"option":${req.body.option_two}, "value":${(req.body.answer_two == 'true')}}`
    let option_three = `{"option":${req.body.option_three}, "value":${(req.body.answer_three == 'true')}}`
    let option_four = `{"option":${req.body.option_four}, "value":${(req.body.answer_four == 'true')}}`
    let answers = [option_one, option_two, option_three, option_four]
    let quiz = new quizes({
        question: question,
        answers: answers
    }).save()
    .then((response) => {res.json({message: 'success', quiz: response})})
    .catch((err) => {res.status(400).json({message: 'error', err})})
})

module.exports = router
