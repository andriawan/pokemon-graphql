import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [showNavMobile, setShowNavMobile] = useState(false)
  const [namePokemon, setNamePokemon] = useState('');
  const [getPokemon, setGetPokemon] = useState();
  const [getPokemonDetail, setGetPokemonDetail] = useState();
  const [fetchData, setFetchData] = useState(6);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertFailed, setShowAlertFailed] = useState(false);
  const [myPokemon, setMyPokemon] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('list-my-pokemon')) : null);

  const handleCatchPokemon = (pokemon) => {
    let data = JSON.parse(localStorage.getItem('list-my-pokemon'))

    const maxNumber = 9;
    const order = getPokemonDetail.pokemon.order;
    const possibilityCatch = Math.floor(Math.random() * maxNumber)
    const resultCatch = Math.floor((order / possibilityCatch) * 10);

    if(!data) {
      let temporaryData = []
      localStorage.setItem('list-my-pokemon', JSON.stringify(temporaryData));
      data = JSON.parse(localStorage.getItem('list-my-pokemon'));
    }
      if(resultCatch % 2 === 0) {
        setShowAlertSuccess(true)
        setTimeout(() => {
          setShowAlertSuccess(false)
        }, 3000);
        setMyPokemon([...data, pokemon])
      } else {
        setShowAlertFailed(true)
        setTimeout(() => {
          setShowAlertFailed(false)
        }, 3000);
      }
  }

  return (
    <PokemonContext.Provider value={{ 
      getPokemon,
      namePokemon,
      getPokemonDetail,
      setNamePokemon,
      setGetPokemon,
      setGetPokemonDetail,
      fetchData,
      setFetchData,
      showAlertSuccess,
      setShowAlertSuccess,
      showAlertFailed,
      setShowAlertFailed,
      handleCatchPokemon,
      myPokemon,
      setMyPokemon,
      showNavMobile,
      setShowNavMobile
    }}
    >
      { children }
    </PokemonContext.Provider>
  );
};