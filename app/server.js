if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const router = require('./router');

const port = process.env.PORT || 3000;
const app = express();

// middleware pour avoir accès à req.body
app.use(express.urlencoded({
    extended: true,
}));

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