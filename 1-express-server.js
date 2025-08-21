const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('user hit the server')
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1> resourse not found</h1>')
})
app.listen(8000,()=>{
    console.log('server us listening on port 8000...')
})





//method thats mostly used


//app.get
//app.post
//app.put
// app.delete
// app.use
// app.all
// app.listen