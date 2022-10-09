const express = require('express');
const config = require('./config');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const productsRoutes = require('./products/products.routes');

const app = express();

app.use(express.json());

//* API base route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Products CRUD database is Ok'
  });
});

app.use('/products', productsRoutes);

//* Authenticate Database
db.authenticate()
  .then(() => console.log('Database authentication succesfully'))
  .catch((err) => console.log(err));

//* Database Sync
db.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

//* Init Models
initModels();

//* Start Server
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});