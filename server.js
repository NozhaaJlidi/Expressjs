const express = require('express')
const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
const useRouter= require('./routes/users')
app.use("/", useRouter)
app.listen(3000,(err)=>
err? console.error(err) : console.log("server is running"))
