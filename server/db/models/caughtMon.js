const Sequelize = require('sequelize')
const db = require('../db')

const CaughtMon = db.define('caughtMons', {
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
