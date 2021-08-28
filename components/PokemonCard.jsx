import { 
  CardPokemonWrapper,
  CardPokemonContent
} from '../styled/components/PokemonCard';
import { GetPokemonsContext } from '../context/GetPokemonContext';
import { useContext } from 'react';
import Image from 'next/image';

export default function PokemonCard() {
  const dataPokemon = useContext(GetPokemonsContext);
  const pokemonCollection = !!dataPokemon && dataPokemon.pokemons.results

  return (
    <CardPokemonWrapper>
      {!!pokemonCollection && pokemonCollection.map((pokemon) => (
        <CardPokemonContent key={pokemon.id}>
          {console.log(pokemon)}
          <Image 
            src={pokemon.dreamworld}
            alt={pokemon.name}
            width={150}
            height={150}
          />
          <h1>{pokemon.name}</h1>
        </CardPokemonContent>
      ))}
    </CardPokemonWrapper>
  )
}