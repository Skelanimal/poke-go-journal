'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const Pokemon = require('../server/db/models/pokemon')
const CaughtMon = require('../server/db/models/caughtMon')

const pokemon = [
  {
    index: 1,
    name: 'Bulbasaur',
    type1: 'Grass',
    type2: 'Poison',
    height: 7,
    weight: 69,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    index: 2,
    name: 'Ivysaur',
    type1: 'Grass',
    type2: 'Poison',
    height: 10,
    weight: 130,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  },
  {
    index: 3,
    name: 'Venusaur',
    type1: 'Grass',
    type2: 'Poison',
    height: 20,
    weight: 1000,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
  },
  {
    index: 4,
    name: 'Charmander',
    type1: 'Fire',
    type2: '',
    height: 6,
    weight: 85,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  },
  {
    index: 5,
    name: 'Charmeleon',
    type1: 'Fire',
    type2: '',
    height: 11,
    weight: 190,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
  },
  {
    index: 6,
    name: 'Charizard',
    type1: 'Fire',
    type2: 'Flying',
    height: 17,
    weight: 905,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
  }
]

const caughtMons = [
  {
    userId: 1,
    pokemonId: 1,
    lat: 40.7831,
    long: -73.9712
  },
  {
    userId: 1,
    pokemonId: 1,
    lat: 11.7831,
    long: -11.9712
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all(
    pokemon.map(pokemon => {
      return Pokemon.create(pokemon)
    })
  )

  await Promise.all(
    caughtMons.map(caughtMon => {
      return CaughtMon.create(caughtMon)
    })
  )

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
