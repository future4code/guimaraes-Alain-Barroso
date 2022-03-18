import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = () => {


    const [pokemons, setPokemons] = useState([])

  
//   componentDidMount() {
//     this.pegaPokemon(this.props.pokemon);
//   }

//   componentDidUpdate(prevProps) {

//     if (prevProps.pokemon !== this.props.pokemon) {
//       this.pegaPokemon(this.props.pokemon);
//     }
//   }


//   pegaPokemon = pokeName => {
//     axios
//       .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
//       .then(response => {
//         // guarda as infos do pokemon no estado
//         this.setState({ pokemon: response.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

  useEffect(() => {
    const fetchPokemons = async () =>{
        const {data} = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons}`)
        console.log(data)
    }
    
    fetchPokemons();

  }, [])

    return (
        <div>
            {/* {user.map((pokemon, i) => {
                {pokemon.name}
                {pokemon.weight} Kg
                {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
                {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                }
            )} */}

        </div>
    );
  }


// export default PokeCard;
