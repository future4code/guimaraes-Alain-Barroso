import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props)=> {

    const [pokemon, setPokemon] = useState({})

        useEffect(() => {
            const pegaPokemon = async () => {
                try {
                    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
                    setPokemon(data)
                }   catch(error) {
                    console.log(error)
                }
            }

            pegaPokemon()
        }, [props.pokemon])
  

      return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );

}

export default PokeCard;
