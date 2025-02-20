import React from 'react'
import {eliminarPokemon} from '../Services/servicesBack'



const DetallePokemonComponent = (props) => {
  const {
    pokemon
  } = props
  console.log(pokemon)

  // if (!pokemon) {
  //   return <div>No se ha seleccionado ningún Pokémon</div>;
  // }

  const eliminarPokemonHandler = (pokemon) => {
    eliminarPokemon(pokemon)
  }

  return (
    <div>
       <div>
            <div>
              <span>Id: </span>
              <span>{pokemon.id}</span>
             
            </div>
            <div>
              <span>Nombre: </span>
              <span>{pokemon.nombre}</span>
            </div>
            <div>
              <span>Url: </span>
              <span>{pokemon.url}</span>
            </div>
            <div>
              <span>Height: </span>
              <span>{pokemon.height}</span>
            </div>
            <div>
              <span>Weight: </span>
              <span>{pokemon.weight}</span>
            </div>
            <div>
              <span>Type: </span>
              <span>{pokemon.type}</span>
            </div>
            <div>
              <button onClick={() => {eliminarPokemonHandler(pokemon)}} >Eliminar</button>
            </div>
            <div>
              <button onClick={() => {}}>Detalles</button>
            </div>
            
            <hr />
          </div>
         
      
    </div>
  )
}

export default DetallePokemonComponent
