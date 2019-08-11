import React, {Component} from 'react'
import PokeList from './pokemon/PokeList'

export default class Pokemans extends Component {
  render() {
    return (
      <div className="row" id="container">
        <div className="col">
          <PokeList />
        </div>
      </div>
    )
  }
}
