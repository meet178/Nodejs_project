/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
const {mongoose} = require('./database');
const {PORT} = require('./config')
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors('*'));
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
  extended: false
}));  

mongoose.connection.on(
    'error',
    console.error.bind(console, 'MongoDB connection error:')
  );
  mongoose.connection.on(
    'connected',
    console.error.bind(console, 'MongoDB connection successfull')
  );

  app.use('/ecommerce',router)

let port = PORT || 9696;
app.listen(port, ()=> {
    console.log(`Server is running on : ${port}`);
})
