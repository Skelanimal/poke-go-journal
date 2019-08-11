import axios from 'axios'
const initialPokemans = []
//action type
const GET_POKEMANS = 'GET_POKEMANS'

//action creator
const getPokemans = pokemans => {
  return {
    type: GET_POKEMANS,
    pokemans
  }
}

//Thunks
export const fetchPokemans = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/pokemon')
      console.log('THIS IS THE ALL THUNK: ' + data)
      dispatch(getPokemans(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//reducer
export default (pokemans = initialPokemans, action) => {
  switch (action.type) {
    case GET_POKEMANS:
      return action.pokemans
    default:
      return pokemans
  }
}
