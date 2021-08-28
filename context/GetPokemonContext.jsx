import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/GetPokemonGraphQL';

export const GetPokemonsContext = createContext();

export default function GetPokemonsProvider({ children }) {
  const { data } = useQuery(GET_POKEMONS);
  return (
    <GetPokemonsContext.Provider value={data}>
      { children }
    </GetPokemonsContext.Provider>
  );
};