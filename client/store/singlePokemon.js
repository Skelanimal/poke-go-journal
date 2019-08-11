import axios from 'axios'
const initialPokeman = {}

const GET_POKEMAN = 'GET_POKEMAN'

const getPokeman = pokeman => {
  return {
    type: GET_POKEMAN,
    pokeman
  }
}

export const fetchPokeman = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/pokemon/${id}`)
      console.log('THIS IS THE SINGLE THUNK: ' + data)
      dispatch(getPokeman(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export default (pokeman = initialPokeman, action) => {
  switch (action.type) {
    case GET_POKEMAN:
      return action.pokeman
    default:
      return pokeman
  }
}
