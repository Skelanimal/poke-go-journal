import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import pokemans from './pokemon'
import pokeman from './singlePokemon'
import caught from './caughtMon'

const reducer = combineReducers({user, pokemans, pokeman, caught})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './pokemon'
export * from './singlePokemon'
export * from './caughtMon'
