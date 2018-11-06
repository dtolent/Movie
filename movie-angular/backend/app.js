const express = require('express');
const userRoutes = require('./routes/user.js');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://donna:nRYKXDuoGGvAqkXS@cluster0-iih9n.mongodb.net/movie-angular?retryWrites=true')
.then(() => {
  console.log('Connected to the database!');
});


const app = express();


app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader("Content-Type", "application/json");
  next();
});

app.use('/api/user',userRoutes);

module.exports = app;
