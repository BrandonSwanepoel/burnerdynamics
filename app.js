const express = require('express');
const session = require('express-session');
const mailer = require('express-mailer');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//Middleware
app.set('view engine', 'ejs');
app.use( express.static( "images" ) );
app.use('/layout', express.static('layout'));
app.use('/javascript', express.static('javascript'));
//views
app.get('/',(req,res) => {
    res.render('homePage')
});
// //Connect to DB
// mongoose.connect(
//     process.env.DB_CONNECTION,
//      { useNewUrlParser: true },
//      () => console.log('connected to DB!', '\nServer is up and running!')
//  );
 //How to start listening to the server
 const port = 8011;
 app.listen(port,() => console.log('Server started on port',port));