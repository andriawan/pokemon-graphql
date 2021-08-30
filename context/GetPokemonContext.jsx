import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/GetPokemonGraphQL';

export const GetPokemonsContext = createContext();

export default function GetPokemonsProvider({ children }) {
  const { data, loading, error } = useQuery(GET_POKEMONS);
  if(loading) return null;
  if (error) return `Error! ${error}`;
  
  return (
    <GetPokemonsContext.Provider value={data}>
      { children }
    </GetPokemonsContext.Provider>
  );
};