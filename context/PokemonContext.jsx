import { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL, GET_POKEMONS } from '../graphql/PokemonGraphql';

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [namePokemon, setNamePokemon] = useState("");
  const [getImagePokemon, setGetImagePokemon] = useState("")
  const getPokemon = useQuery(GET_POKEMONS);
  const getPokemonDetail = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: namePokemon
    }
  });

  if(getPokemon.loading || getPokemonDetail.loading) return null;
  if(getPokemon.error || getPokemonDetail.error) return `Error! ${error}`;
  
  return (
    <PokemonContext.Provider value={{ 
      getPokemon,
      getPokemonDetail,
      setNamePokemon,
      setGetImagePokemon
    }}
    >
      { children }
    </PokemonContext.Provider>
  );
};