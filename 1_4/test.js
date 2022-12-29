const express = require('express')
const app = express()

app.use(express.json({
    limit : '50mb'
}))

app.get('/', function(req,res){
    res.send('hello world!')
})

app.get('/about', function(req,res){
    res.send('about')
})

app.post('/customer', function(req,res){
    console.log(req.body.param)
    res.send(req.body.param)
})

app.listen(3000)