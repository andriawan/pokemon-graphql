import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [namePokemon, setNamePokemon] = useState("");
  const [getPokemon, setGetPokemon] = useState();
  const [getPokemonDetail, setGetPokemonDetail] = useState();
  const [fetchData, setFetchData] = useState(6)
  
  return (
    <PokemonContext.Provider value={{ 
      getPokemon,
      namePokemon,
      getPokemonDetail,
      setNamePokemon,
      setGetPokemon,
      setGetPokemonDetail,
      fetchData,
      setFetchData
    }}
    >
      { children }
    </PokemonContext.Provider>
  );
};