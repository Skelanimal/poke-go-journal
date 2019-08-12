import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Shadow = styled.div`
  -moz-user-select: none
  -website-user-select:none;
  user-select:none;
  -o-user-select:none;
`

const PokeSprite = styled.img`
  width: 5em;
  height: 5em;
`

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const pokeCard = props => {
  const {pokeInfo} = props
  console.log(pokeInfo)
  return (
    <div>
      <div className="row">
        {pokeInfo.length ? (
          pokeInfo.map(poke => (
            <div className="col-md-3 col-sm-5 mb-4" key={poke.id}>
              <LinkStyle to={`pokemans/${poke.index}`}>
                <Shadow className="card">
                  <h5 className="card-header">{poke.index}</h5>
                  <PokeSprite
                    className="card-img-top rounded mx-auto mt-2"
                    src={poke.imageUrl}
                  />
                  <div className="card-body mx-auto">
                    <h6 className="card-title">
                      {poke.name
                        .toLowerCase()
                        .split('-')
                        .map(
                          letter =>
                            letter.charAt(0).toUpperCase() + letter.substring(1)
                        )
                        .join('-')}
                    </h6>
                  </div>
                </Shadow>
              </LinkStyle>
            </div>
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </div>
  )
}

export default pokeCard
