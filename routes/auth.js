const express = require('express')
const router = express.Router()


router.post('/',(req, res)=>{
    const { name } = req.body
    if(name){
        return res.status(200).send(`welcomse ${name}`)
    }
    res.status(404).send('please provide credintials')
})

module.exports = router