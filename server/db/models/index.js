const User = require('./user')
const Pokemon = require('./pokemon')
const CaughtMon = require('./caughtMon')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.belongsToMany(Pokemon, {
  through: {model: CaughtMon},
  foreignKey: 'userId'
})

Pokemon.belongsToMany(User, {
  through: {model: CaughtMon},
  foreignKey: 'pokemonId'
})

module.exports = {
  User,
  Pokemon,
  CaughtMon
}
