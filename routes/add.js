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
    console.log(question, answers)
})

module.exports = router
