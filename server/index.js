//include cors
const cors = require('cors');

//include instancia de express
const express = require('express');

//include my routes
const routes = require('../routes');

//generar instancia de express
const server = express();

//se usa cors y se especifica
server.use(cors());
server.options('*', cors());

server.use(express.json());

//especifica la diagonal
server.use('/api', routes);

module.exports = server;
