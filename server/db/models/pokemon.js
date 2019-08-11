const Sequelize = require('sequelize')
const db = require('../db')

const Pokemon = db.define('pokemon', {
  index: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  type1: {
    type: Sequelize.STRING
  },
  type2: {
    type: Sequelize.STRING
  },
  height: {
    type: Sequelize.INTEGER
  },
  weight: {
    type: Sequelize.INTEGER
  }
})

module.exports = Pokemon
