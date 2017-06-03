'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// console.log(config.database);

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database: ' + config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// user related routes are found in ./routes/users
const users = require('./routes/users');
const blogs = require('./routes/blogs');


var app = express();
const port = 3000;

// cors middleware allow access from different port here.
app.use(cors());
// body parser middleware
// app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/blogapi', blogs);


// app.get('/', function(req, res) {
//     res.send('Invalid Endpoint');
// });
// unrecognized routes go to index page.
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});


let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A user is connected');
  socket.on('disconnect', function(){
    console.log('The user is disconnected');
  });
  socket.on('add-message', (message) => {
    console.log('message received at server', message);
    io.emit('message', { type :'new-message', msg : message });
  });
});
http.listen(5000, () => {
  console.log('socket.io server started on port 5000');
});
