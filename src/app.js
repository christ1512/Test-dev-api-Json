const express = require('express')
const  cors = require('cors')
const morgan= require('morgan')
const app=express()

//settiengs
app.set('port',process.env.PORT||4000)
// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


//routes
app.use('/jsonplaceholder',require('./routers/posts-router'))

app.use('/jsonplaceholder',require('./routers/comments-router'))

app.use('/ejercios',require('./routers/ejercicios-route'))
module.exports = app