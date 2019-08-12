import axios from 'axios'

const initialCaught = []

const GET_CAUGHT = 'GET_CAUGHT'

const getCaught = caught => {
  return {
    type: GET_CAUGHT,
    caught
  }
}

export const fetchCaught = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/caughtMon')
      dispatch(getCaught(data))
      console.log('FETCH CAUGHT THUNK RUNNING')
    } catch (error) {
      console.error(error)
    }
  }
}

export default (caught = initialCaught, action) => {
  switch (action.type) {
    case GET_CAUGHT:
      return action.caught
    default:
      return caught
  }
}
