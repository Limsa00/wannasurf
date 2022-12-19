require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const port = process.env.PORT || 3000;
const server = express();

// middleware pour avoir accès à req.body
server.use(express.urlencoded({
    extended: true,
}));

// routeur
server.use(router);

server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});