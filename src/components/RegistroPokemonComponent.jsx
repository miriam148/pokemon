import React, {useState }from 'react'
import { registerPokemon } from '../Services/servicesBack'

const RegistroPokemonComponent = () => {
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

  const registerHandler = () => {
    registerPokemon(newPokemon)
    setNewPokemon({
      id:'',
      nombre:'',
      url:'',
      height:'',
      weight:'',
      type:['']
    })

  }

  return (
    <div>
      <h2>Registro de Pokemon</h2>
      <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', gap:10}}>
        <div className='containerInput'>
        <div>
        <span>Id: </span>
        <input type="text" name='Id' value={newPokemon.id} onChange={(e) => {inputHandler(e.target.value)}}/>
        </div>
        <div>
        <span>Nombre: </span>
        <input type="text" name='nombre' value={newPokemon.nombre} onChange={(e) => {inputHandler(e.target.value)}}/>
        </div>
        <div>
        <span>Url: </span>
        <input type="text" name='url' value={newPokemon.url} onChange={(e) => {inputHandler(e.target.value)}}/>
        </div>
        <div>
        <span>Height: </span>
        <input type="text" name='height' value={newPokemon.height} onChange={(e) => {inputHandler(e.target.value)}}/>
        </div>
        <div>
        <span>Weight: </span>
        <input type="text" name='weight' value={newPokemon.weight} onChange={(e) => {inputHandler(e.target.value)}}/>
        </div>
        <div>
        <span>Type: </span>
        <input type="text" name='type' value={newPokemon.type} onChange={(e) => {inputHandler(e.target.value)}}/>
        </div>
        </div>
        <div>
        <button onClick={() => {registerHandler}}> Regístralo </button>
        </div>
            
            
        </div>
      
    </div>
  )
}

export default RegistroPokemonComponent
