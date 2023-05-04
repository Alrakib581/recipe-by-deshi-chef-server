const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const footerData = require('./footer.json')
const port = 5000

app.get('/', (req,res)=>{
    res.send(footerData)
})
app.listen(port, ()=>{
    console.log(`the server ranning on ${port}`)
})