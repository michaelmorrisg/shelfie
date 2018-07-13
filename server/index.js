const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./controller')

const app = express()

app.use(bodyParser.json())
const port = 3020

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
    app.listen(port, ()=>console.log(`Listening on port ${port}`))

}).catch(err=>{
    console.log(err)
})

//////Endpoints////////

app.get('/api/inventory',controller.getItems)
app.post('/api/product',controller.addProduct)
app.delete('/api/product/:id',controller.deleteProduct)
app.put('/api/product/:id',controller.editProduct)




