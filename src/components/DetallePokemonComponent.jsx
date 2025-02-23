
import React from 'react'
import {eliminarPokemon} from '../Services/servicesBack'



const DetallePokemonComponent = (props) => {
  const {
    pokemon,
    loadPokemon,
    setPokemonSelected,
    setMenuOption
  } = props
  console.log(pokemon)

  if (!pokemon) {
    return <div>No se ha seleccionado ningún Pokémon</div>;
  }

  const eliminarPokemonHandler = (pokemon) => {
    eliminarPokemon(pokemon)
    loadPokemon()
  }

  const selectPokemon = (pokemon) => {
    setPokemonSelected(pokemon)
    console.log(pokemon)
    // setMenuOption && setMenuOption('DETALLES');
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
            <div style={{ margin: '5px 0' }}>
              <button onClick={() => {eliminarPokemonHandler(pokemon)}} >Eliminar</button>
            </div>
            {
              setMenuOption ? (
                <div>
                   <div>
                  <button style={{ margin: '10px 0' }} onClick={() => setMenuOption('LISTADO')}>Volver</button>
                   </div>
                   <div>
                  <button onClick={() => setMenuOption('REGISTRO')}>Editar</button>
                   </div>
                </div>
               
                
              
              ) : (
                <div>
                  {/* <button onClick={() => {selectPokemon}}>Detalles</button> */}
                  <button onClick={() => selectPokemon(pokemon) }>Detalles</button>
            </div>
              )
            }
            
            
            <hr />
          </div>
         
      
    </div>
  )
}

export default DetallePokemonComponent
