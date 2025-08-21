const express = require('express')
const app = express()

const morgan = require('morgan')
const logger =require('./logger')
const authorize = require('./authorize')
// req => middleware => res

//1. use vs route
// 2. option our own/express/third party


// app.use([logger,authorize])

// app.use(express.static = ('./public'))
app.use(morgan('tiny'))


app.get('/',logger,(req,res)=>{
    res.send('Home')
})
app.get('/about',logger, (req,res)=>{
    res.send('Abouts')
})


app.get('/api/products', (req,res) =>{
    res.send('products')
})

app.get('/api/items',[logger,authorize], (req,res) =>{
    console.log(req.user);
    
    res.send('Items')
})


app.listen(8000,()=>{
    console.log('server is listienig to port 8000')
})