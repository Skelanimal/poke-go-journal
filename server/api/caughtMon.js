const router = require('express').Router()
const {CaughtMon} = require('../db/models')
module.exports = router

router.get('/', async (req, res) => {
  try {
    const captured = await CaughtMon.findAll({})
    res.json(captured)
  } catch (error) {
    console.error(error)
  }
})
