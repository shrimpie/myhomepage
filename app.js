'use strict';

const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const config = require('./config/database');
const mongoose = require('mongoose');

const UserRoute = require('./routes/users');
const BlogRoute = require('./routes/blogs');
const MessageRoute = require('./routes/messages');
const SocketEvents = require('./utils/socket');


class Server {

  constructor () {
    this.port = process.env.PORT || 8080;
    this.host = `localhost`;
    this.app = express();
    this.http = http.Server(this.app);
    this.socket = socketio(this.http);
    this.db = mongoose;
  }

  appConfig() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    require('./config/passport')(passport);
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  includeRoutes() {
    new UserRoute(this.app).routesConfig();
    new BlogRoute(this.app).routesConfig();
    new MessageRoute(this.app).routesConfig();
    new SocketEvents(this.socket).socketConfig();
  }

  connectDatabase() {
    this.db.connect(config.database);
    this.db.connection.on('connected', () => {
      console.log('Connected to database: ' + config.database);
    });
    this.db.connection.on('error', (err) => {
      console.log('Database error: ' + err);
    });
  }

  appExecute() {
    this.appConfig();
    this.includeRoutes();
    this.connectDatabase();
    this.http.listen(this.port, this.host, () => {
        console.log(`Listening on http://${this.host}:${this.port}`);
    });
  }

}

const app = new Server();
app.appExecute();
