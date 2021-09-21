const express = require('express')
const app = express()

app.use(express.json())

require('dotenv').config()
const port = process.env.PORT

app.get('/users', (req,res)=>{
    res.send("Pegaste bien man")
})

app.post('/new-user', (req,res)=>{
    console.log(req.body)
    res.json(req.body.title)
})

app.listen(port, () =>{
    console.log(`Estamos escuchando el puerto ${port}`)
})