const mongoose = require('mongoose')
const options = new mongoose.Schema({
    answer: String,
    value: Boolean
})

const model = new mongoose.Schema({
    question: String,
    answers: [options]
})

module.exports = mongoose.model('quiz', model)