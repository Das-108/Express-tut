const express = require('express')
const app = express()

const people = require('./routes/people')

// static assests
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.use('/api/people',people)

app.post('/login',(req, res)=>{
    const { name } = req.body
    if(name){
        return res.status(200).send(`welcomse ${name}`)
    }
    res.status(404).send('please provide credintials')
})


app.listen(8000, () =>{
    console.log('server is Listening on port 8000...')
})