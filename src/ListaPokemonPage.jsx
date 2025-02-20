import React, {useEffect, useState} from 'react'
import { getPokemon } from './Services/servicesBack'
import RegistroPokemonComponent from './components/RegistroPokemonComponent'
import ListadoPokemonComponent from './components/ListadoPokemonComponent'
import DetallePokemonComponent from './components/DetallePokemonComponent'
import ContactoComponent from './components/ContactoComponent'


const ListaPokemonPage = () => {
    const [listadoDePokemon, setListadoDePokemon] = useState('')

    const loadData = () => {
        const aux = getPokemon()
        setListadoDePokemon(aux)
        console.log(aux)
    }

    useEffect (() => {
        loadData();
      }, [])

  return (
    <div className='containerPage'>
        <h1>Los Pokemon Silvestres</h1>
        <div style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center', gap:30}}>
            <div><button>Registra tu Pokemon</button></div>
            <div><button>Contacto</button></div>
            <div><button>Lista Pokemon</button></div>

        </div>
        <hr />
        <div>
            <RegistroPokemonComponent/>
            <ListadoPokemonComponent/>
            <DetallePokemonComponent/>
            <ContactoComponent/>
        </div>

      
    </div>
  )
}

export default ListaPokemonPage
