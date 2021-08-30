import { GetPokemonDetailContext } from '../context/GetPokemonDetailContext';
import { useContext, useEffect } from 'react';

export default function PokemonDetail({ name }) {
  const { data, setNamePokemon } = useContext(GetPokemonDetailContext)
  useEffect(() => {
    setNamePokemon(name)
  }, [name])

  console.log(data)

  return (
    <div>

    </div>
  )
}