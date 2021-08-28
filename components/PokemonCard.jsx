import { 
  CardPokemonWrapper,
  CardPokemonContent
} from '../styled/components/PokemonCard';
import { GetPokemonsContext } from '../context/GetPokemonContext';
import { useContext } from 'react';
import Image from 'next/image';
import PokemonCardSkeleton from './Skeleton/PokemonCardSkeleton';

export default function PokemonCard({ fetchData }) {
  const dataPokemon = useContext(GetPokemonsContext);
  const pokemonCollection = !!dataPokemon && dataPokemon.pokemons.results || []

  return (
    <CardPokemonWrapper>
      {pokemonCollection.slice(0, fetchData).map((pokemon) => (
        <CardPokemonContent key={pokemon.id}>
          <Image 
            src={pokemon.dreamworld}
            alt={pokemon.name}
            width={150}
            height={150}
          />
          <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        </CardPokemonContent>
      ))}
    </CardPokemonWrapper>
  )
}

