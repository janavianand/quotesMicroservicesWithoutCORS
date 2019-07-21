const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./db')


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', require('./api'))

app.use((err,req,res,next)=>{
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

let PORT = 5001;

async function startServer(){
  await db.sync()
  app.listen(PORT,()=>{
    console.log(`Quotes Server Listening at ${PORT}`)
    db.sync()
  })
}

startServer();

