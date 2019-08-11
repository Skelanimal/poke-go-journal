const router = require('express').Router()
const {Pokemon} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allPokes = await Pokemon.findAll({
      order: ['index']
    })
    res.json(allPokes)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const pokeIdx = req.params.id
    const poke = await Pokemon.findByPk(pokeIdx)
    res.json(poke)
  } catch (error) {
    console.error(error)
  }
})
