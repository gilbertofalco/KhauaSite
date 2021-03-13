const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

require('./app/controllers/index')(app)


app.get('/', (req, res) => {
    res.send('funcionando')
})

const routes = require('./routes')
app.use('/api', routes)

app.use(express.static(__dirname + '/frontend'))

const port = 3001

app.listen(port, () =>{
    console.log('serve running on localhost:', port)
})