const router = require('express').Router()
const {User} = require('../db/models')
const CaughtMon = require('../db/models/pokemon')
const Pokemon = require('../db/models/pokemon')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [{all: true}],
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const userIdx = req.params.id
    const user = await User.findByPk(userIdx, {include: [{all: true}]})
    res.json(user)
  } catch (error) {
    console.error(error)
  }
})
