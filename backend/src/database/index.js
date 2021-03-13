const mongoose = require('mongoose')
const { password } = require('../../src/config/db.json')

mongoose.connect(password.toString(), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
mongoose.Promise = global.Promise

module.exports = mongoose;

