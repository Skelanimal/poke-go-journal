import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPokeman} from '../../store/singlePokemon'
import styled from 'styled-components'

const typeColor = {
  Bug: 'B1C12E',
  Dark: '4F3A2D',
  Dragon: '755EDF',
  Electric: 'FCBC17',
  Fairy: 'F4B1F4',
  Fighting: '823551D',
  Fire: 'E73B0C',
  Flying: 'A3B3F7',
  Ghost: '6060B2',
  Grass: '74C236',
  Ground: 'D3B357',
  Ice: 'A3E7FD',
  Normal: 'C8C4BC',
  Poison: '934594',
  Psychic: 'ED4882',
  Rock: 'B9A156',
  Steel: 'B5B5C3',
  Water: '3295F6'
}

const PokeSprite = styled.img`
  width: 13em;
  height: 13em;
`

class SinglePoke extends Component {
  componentDidMount() {
    this.props.fetchPokeman(this.props.match.params.id)
  }

  render() {
    const {pokeman} = this.props
    console.log(pokeman)
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{pokeman.index}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  <span
                    className="badge badge-primary badge-pill mr-1"
                    style={{
                      backgroundColor: `#${typeColor[pokeman.type1]}`,
                      color: 'white'
                    }}
                  >
                    {pokeman.type1}
                  </span>
                  {pokeman.type2 ? (
                    <span
                      className="badge badge-primary badge-pill mr-1"
                      style={{
                        backgroundColor: `#${typeColor[pokeman.type2]}`,
                        color: 'white'
                      }}
                    >
                      {pokeman.type2}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <PokeSprite
                  src={pokeman.imageUrl}
                  className="card-img-top rounded mx-auto mt-9"
                />
              </div>
              <div className="col-md-9">
                <h4 className="mx-auto">{pokeman.name}</h4>
                <div className="row align-items-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokeman: state.pokeman
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPokeman: id => dispatch(fetchPokeman(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePoke)
