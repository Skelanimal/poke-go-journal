import React, {Component} from 'react'

import {connect} from 'react-redux'
import {fetchCaught} from '../store/caughtMon'
import {fetchPokemans} from '../store/pokemon'

class CaughtMon extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCaught()
    this.props.fetchPokemans()
  }

  render() {
    const {pokemans, caught, user} = this.props
    let dex = caught.filter(cap => cap.userId === user.id)

    return (
      <div>
        {dex.length && pokemans.length ? (
          pokemans
            .filter(poke => poke.index === dex.pokemonId)
            .map(poke => <h4>{poke.name}</h4>)
        ) : (
          <h1>Looks like you need to visit Professor Oak!</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    caught: state.caught,
    pokemans: state.pokemans,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCaught: () => dispatch(fetchCaught()),
  fetchPokemans: () => dispatch(fetchPokemans())
})

export default connect(mapStateToProps, mapDispatchToProps)(CaughtMon)
