import React from 'react'

import DetallePokemonComponent from './DetallePokemonComponent'


const ListadoPokemonComponent = (props) => {
  const {
    listadoPokemon,
    loadPokemon,
    setPokemonSelected
  } = props

  
  return (
    <div>
      <h2>Lista de Pokemon</h2>
      {
        (listadoPokemon && listadoPokemon.length > 0) 
        ? listadoPokemon.map((e, idx) => (<DetallePokemonComponent key={idx} pokemon={e} loadPokemon={loadPokemon} setPokemonSelected={setPokemonSelected} />))
        : <div>No hay pokemon que mostrar</div>
      }
    </div>
  )
}

export default ListadoPokemonComponent
