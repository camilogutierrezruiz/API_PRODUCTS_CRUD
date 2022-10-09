const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Products = db.define('products', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_available'
  }
});

module.exports = Products;