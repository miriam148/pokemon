import React, {useState }from 'react'
import { editarPokemon, registerPokemon } from '../Services/servicesBack'

const RegistroPokemonComponent = (props) => {
  const {
    loadPokemon,
    setMenuOption,
    pokemon,
    setPokemonSelected
  } = props


  const [newPokemon, setNewPokemon] = useState({
    id:'',
    nombre:'',
    url:'',
    height:'',
    weight:'',
    type:['']

  })

  const inputHandler = (nameProp,valueProp) => {
    const pokemonAux = {
      ...newPokemon,
      [nameProp]: valueProp
    }
    setNewPokemon(pokemonAux)
  }

  const registerHandler = () => { //REPASAR ESTO
    const pokemonWithNumberId = {
      ...newPokemon,
      id: parseInt(newPokemon.id, 10) 
    };



    registerPokemon(pokemonWithNumberId)
    setNewPokemon({
      id: '',
      nombre:'',
      url:'',
      height:'',
      weight:'',
      type:['']
    })
    loadPokemon()
    setMenuOption('LISTADO')

  }

  const modifyHandler = () => {
    const updatePokemon = {
      ...pokemon,
      nombre: newPokemon.nombre
    }
    editarPokemon(pokemon, updatePokemon)
    setPokemonSelected(updatePokemon)
    setNewPokemon({
      id: '',
      nombre:'',
      url:'',
      height:'',
      weight:'',
      type:['']
      
     
    })
    loadPokemon()
    setMenuOption('DETALLES')
  }

  const cancelHandler = () => {
    setNewPokemon({
      id: '',
      nombre:'',
      url:'',
      height:'',
      weight:'',
      type:['']

    })
    setMenuOption('DETALLES')
  }

  return (
    <div>
      {
        pokemon? (
          <h2>Editar pokémon</h2>

        )
        :(
          <h2>Registro de Pokémon</h2>
        )
      }
      
      <div  >
        <div className='containerInput'>
        <div >
        <span>Id: </span>
        <input type="number" name='id' value={newPokemon.id} onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
        </div>
        <div>
        <span style={{ width: '80px', textAlign: 'right', marginRight: '10px' }}>Nombre: </span>
        <input type="text" name='nombre' value={newPokemon.nombre} onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
        </div>
        <div>
        <span style={{ width: '80px', textAlign: 'right', marginRight: '10px' }}>Url: </span>
        <input type="text" name='url' value={newPokemon.url} onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
        </div>
        <div>
        <span style={{ width: '80px', textAlign: 'right', marginRight: '10px' }}>Height: </span>
        <input type="text" name='height' value={newPokemon.height} onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
        </div>
        <div>
        <span style={{ width: '80px', textAlign: 'right', marginRight: '10px' }}>Weight: </span>
        <input type="text" name='weight' value={newPokemon.weight} onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
        </div>
        <div >
        <span>Type: </span>
        <input type="text" name='type' value={newPokemon.type} onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
        </div>
        </div>
        <div style={{ margin: '20px 0' }}>
          {
            pokemon
            ?(
              <div>
              <button  style={{ marginRight: '10px' }} onClick={modifyHandler} > Editar </button>
              <button  onClick={cancelHandler} > Volver </button>
              </div>
            ) : (
              <button onClick={registerHandler} > Registra tu pokémon </button>
            )
          }
       
        </div>
            
            
        </div>
      
    </div>
  )
}

export default RegistroPokemonComponent
