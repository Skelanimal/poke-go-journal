import React, {Component} from 'react'
import PokeCard from './PokeCard'
import {connect} from 'react-redux'
import {fetchPokemans} from '../../store/pokemon'

class PokeList extends Component {
  componentDidMount() {
    this.props.fetchPokemans()
  }

  render() {
    const {pokemans} = this.props
    return (
      <div>
        <PokeCard pokeInfo={pokemans} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemans: state.pokemans
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemans: () => dispatch(fetchPokemans())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)
