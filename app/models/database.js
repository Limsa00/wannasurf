const { Pool } = require('pg');

const clientPg = new Pool();

module.exports = clientPg;