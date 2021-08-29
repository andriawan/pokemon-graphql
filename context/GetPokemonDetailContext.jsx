import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../graphql/GetPokemonDetailsGraphQL';

export const GetPokemonDetailContext = createContext();

export default function GetPokemonDetailProvider({ children }) {
  const { data } = useQuery(
    GET_POKEMON_DETAIL, {
      variables: { 
        name: "ivysaur"
      }
    }
  );
  return (
    <GetPokemonDetailContext.Provider value={data}>
      { children }
    </GetPokemonDetailContext.Provider>
  );
};