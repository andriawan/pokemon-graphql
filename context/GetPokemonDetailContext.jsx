import { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../graphql/GetPokemonDetailsGraphQL';

export const GetPokemonDetailContext = createContext();

export default function GetPokemonDetailProvider({ children }) {
  const [namePokemon, setNamePokemon] = useState("")
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: namePokemon
    }
  })

  if(loading) return null;
  if (error) return `Error! ${error}`;
  
  return (
    <GetPokemonDetailContext.Provider value={{ data, setNamePokemon }}>
      { children }
    </GetPokemonDetailContext.Provider>
  );
};