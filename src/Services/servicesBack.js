let listaPokemon = [
    {
      "id": 1,
      "nombre": "Pepin",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "1",
      "weight": "1",
      "type": ["tormenta"]
    },
    {
      "id": 2,
      "nombre": "Anacleto",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "2",
      "weight": "2",
      "type": ["granizo"]
      
    },
    {
      "id": 3,
      "nombre": "Gertrudis",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "3",
      "weight": "3",
      "type": ["chirimiri"]
     
    },
    {
      "id": 4,
      "nombre": "Horacio",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "4",
      "weight": "4",
      "type": ["viento"]
      
    },
    {
      "id": 5,
      "nombre": "Rosauro",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "5",
      "weight": "5",
      "type": ["sol"]
      
    },
    {
      "id": 6,
      "nombre": "Rasputin",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "7",
      "weight": "7",
      "type": ["estrella"]
     
    },
    {
      "id": 7,
      "nombre": "Cerebrina",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "8",
      "weight": "8",
      "type": ["fuego"]
     
    },
    {
      "id": 8,
      "nombre": "Asupatarra",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "9",
      "weight": "9",
      "type": ["aire"]
     
    },
    {
      "id": 9,
      "nombre": "Filomeno",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "9",
      "weight": "9",
      "type": ["roca"]
      
    },
    {
      "id": 10,
      "nombre": "Anacarda",
      "url": "https://pokeapi.co/api/v2/pokemon/ditto",
      "height": "10",
      "weight": "10",
      "type": ["nube"]
     
    }
  ]




  export const getPokemon = () => {
    return listaPokemon
}

export const registerPokemon = (pokemon) => {
    const auxList = [...listaPokemon]
    auxList.push(pokemon)
    listaPokemon = auxList
}

export const eliminarPokemon = (pokemon) => {
    const auxList = listaPokemon.filter((e) => e.nombre != pokemon.nombre)
    listaParejas = auxList
}

/*Para editar.  LE PASO PARAMETRO DE PAREJA Y PAREJAMODIFY.
PAREJA: VALORES SIN MODIFICAR
PAREJA MODIFY: VALORES MODIFICADOS DE LA PAREJA  */
export const  editarPareja= (pareja, parejaModify) => {
const bdAux = listaParejas.filter(p => p.id !== pareja.id) //LA SACO DE LA LISTA Y LE METO LA NUEVA CON SUS MODIFICACIONES
bdAux.push(parejaModify)
listaParejas = bdAux // LA P DE PAREJA Y CUANDO EL ID SEA DISTINTO A PAREJA.ID QUE ME LO META EN ADAUX
}
