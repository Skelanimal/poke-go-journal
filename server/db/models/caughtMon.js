const Sequelize = require('sequelize')
const db = require('../db')

const CaughtMon = db.define('caughtMons', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  long: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = CaughtMon
