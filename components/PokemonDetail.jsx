import { PokemonContext } from '../context/PokemonContext';
import { useContext, useEffect } from 'react';

export default function PokemonDetail({ name }) {
  const { setNamePokemon, ...data } = useContext(PokemonContext)
  const pokemonDetail = !!data && data.getPokemonDetail.data.pokemon;
  
  useEffect(() => {
    setNamePokemon(name)
  }, [name])

  console.log(pokemonDetail)

  return (
    <div>

    </div>
  )
}