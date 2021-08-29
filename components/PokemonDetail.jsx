import { GetPokemonDetailContext } from '../context/GetPokemonDetailContext';
import { useContext } from 'react';

export default function PokemonDetail() {
  const dataPokemonDetail = useContext(GetPokemonDetailContext)
  console.log(dataPokemonDetail);
  return (
    <div>

    </div>
  )
}