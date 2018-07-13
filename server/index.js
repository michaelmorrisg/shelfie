const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./controller')

const app = express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
}).catch(err=>{
    console.log(err)
})

//////Endpoints////////

app.get('/api/inventory',controller.getItems)
app.post('/api/product',controller.addProduct)



const port = 3020
app.listen(port, ()=>console.log(`Listening on port ${port}`))