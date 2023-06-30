if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
//const session = require('express-session');
const router = require('./router');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static( __dirname + '../../Front/build'));

// middleware pour avoir accès à req.body
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Politique de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    next();
});

// routeur
app.use(router);

app.launch = () =>{
    app.listen(port, () => {console.log(`Serveur lancé sur http://localhost:${port}`)});
}

// toutes les promesses qu'on n'entoure pas d'un try/catch seront automatiquement stoppées ici si elles sont rejetées
process.on('unhandledRejection', (err) => {
    console.log('Interception d\'un rejet de promesse');
    console.error(err);
});

module.exports = app;