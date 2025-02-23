require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected'));

app.use(express.json())
const bookRouter = require('./routes/bookRouter')
app.use('/book',bookRouter)
app.listen(5002, () => console.log('Server Started'));