import { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [showNavMobile, setShowNavMobile] = useState(false)
  const [namePokemon, setNamePokemon] = useState('');
  const [getPokemon, setGetPokemon] = useState();
  const [getPokemonDetail, setGetPokemonDetail] = useState();
  const [fetchData, setFetchData] = useState(6);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertFailed, setShowAlertFailed] = useState(false);
  const [myPokemon, setMyPokemon] = useState([]);
  
  // only init data from localstorage here, not in component
  useEffect(() => {
    setMyPokemon(JSON.parse(localStorage.getItem('list-my-pokemon')))
  }, [])

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
         // implement checking duplicate for example
         let isDuplicate = false;
         data.forEach((value) => {
           if(value.name === pokemon.name){
             isDuplicate = true;
           }
         })
 
         // only do localStorage.setItem, not in useEffect
         if(!isDuplicate){
           localStorage.setItem('list-my-pokemon', JSON.stringify([...data, pokemon]));
           setMyPokemon([...data, pokemon])
         }
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