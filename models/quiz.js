const mongoose = require('mongoose')

const model = new mongoose.Schema({
    question: String,
    answers: []
})

module.exports = mongoose.model('quiz', model)