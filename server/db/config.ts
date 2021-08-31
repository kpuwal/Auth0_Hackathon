require('dotenv').config();
const pgp = require('pg-promise')();
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const conStrProd = `postgresql://${process.env.DB_USER_PROD}:${process.env.DB_PASSWORD_PROD}@${process.env.DB_HOST_PROD}:${process.env.DB_PORT_PROD}/${process.env.DB_DATABASE_PROD}`

const db = pgp({
  connectionString: conStrProd,
  ssl: {
    rejectUnauthorized: false
  },
  capSQL: true
});

module.exports = {
  pgp, db
};
