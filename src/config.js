require('dotenv').config();

const config = {
  port: process.env.PORT || 1969,
  nodeEnv: process.env.NODE_ENV,
  db: {
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
  }
};

module.exports = config;