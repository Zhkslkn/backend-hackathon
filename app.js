const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const dashboardRoutes = require('./routes/dashboard')
const app = express()

const db = 'mongodb+srv://zhkslkn04:arnur4ik@cluster0.t1cvq5x.mongodb.net/hackathon?retryWrites=true&w=majority'

mongoose.connect(db)
    .then((res) => console.log('Connected to the db'))
    .catch((error) => console.log(error))


app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes)
app.use('/api/dashboard', dashboardRoutes)

module.exports = app
