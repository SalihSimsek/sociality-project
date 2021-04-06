const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const ProductRouter = require('./src/route/product-route')

require('./db-connection')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/product', ProductRouter)

app.get('/', async (req, res) => {
    res.send('Homepage')
})


module.exports = app