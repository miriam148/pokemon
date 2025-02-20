import React, {useEffect, useState} from 'react'
import { getPokemon } from './Services/servicesBack'
import RegistroPokemonComponent from './components/RegistroPokemonComponent'
import ListadoPokemonComponent from './components/ListadoPokemonComponent'
import DetallePokemonComponent from './components/DetallePokemonComponent'
import ContactoComponent from './components/ContactoComponent'


const ListaPokemonPage = () => {
    const [menuOption, setMenuOption] = useState('') //registro-contacto-listado-detalle
    const [listadoDePokemon, setListadoDePokemon] = useState([])

    const loadData = () => {
        const aux = getPokemon()
        setListadoDePokemon(aux)
        console.log(aux)
    }

    const menuOptionHandler = (option) => {
        setMenuOption(option)

    }

    useEffect (() => {
        loadData();
      }, [])

  return (
    <div className='containerPage'>
        <h1>Los Pokémon de CodeSpace</h1>
        <div style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center', gap:30}}>
            <div><button onClick={() => menuOptionHandler('REGISTRO')} >Registra tu Pokemon</button></div>
            <div><button  onClick={() => menuOptionHandler('CONTACTO')}>Contacto</button></div>
            <div><button  onClick={() => menuOptionHandler('DETALLES')}>Lista Pokemon</button></div>

        </div>
        <hr />
        <div>
            {
                menuOption === "REGISTRO"
                ?(<RegistroPokemonComponent loadPokemon={loadData} />)
                : menuOption === "CONTACTO"
                ?(<ContactoComponent/>)
                :menuOption === "DETALLES"
                ?(  <DetallePokemonComponent/>)
                : <ListadoPokemonComponent listadoPokemon={listadoDePokemon} loadPokemon={loadData}/>
            }
            
           
          
            
        </div>

      
    </div>
  )
}

export default ListaPokemonPage
