const express = require("express")
const routes = require("./routes")
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

app.use(routes)





app.listen(3000,()=>{
    console.log('listening on port 3000')
})