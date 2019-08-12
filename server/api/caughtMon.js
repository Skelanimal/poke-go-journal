const router = require('express').Router()
const {CaughtMon} = require('../db/models')
const Pokemon = require('../db/models/pokemon')
module.exports = router

router.get('/', async (req, res) => {
  try {
    const captured = await CaughtMon.findAll({
      include: [
        {
          model: Pokemon,
          required: true
        }
      ]
    })
    res.json(captured)
  } catch (error) {
    console.error(error)
  }
})
