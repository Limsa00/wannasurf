const { Pool } = require('pg');

const clientPg = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password:process.env.PGPASSWORD
});

module.exports = clientPg;