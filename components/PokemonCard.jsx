import { 
  CardPokemonWrapper,
  CardPokemonContent,
  SpinnerLoader,
  Loader
} from '../styled/components/PokemonCard';
import { GetPokemonsContext } from '../context/GetPokemonContext';
import { useContext } from 'react';
import Image from 'next/image';
import Spinner from '../public/icons/Spinner';
import { css } from '@emotion/css';
import Link from 'next/link';

export default function PokemonCard({ fetchData }) {
  const dataPokemon = useContext(GetPokemonsContext);
  const pokemonCollection = !!dataPokemon && dataPokemon.pokemons.results || [];

  return (
    <CardPokemonWrapper>
      { pokemonCollection.length === 0 
        ?
          <Spinner 
            width={100}
            height={100}
            fill={'#FFDE00'}
            className={css`
              margin-left: auto;
              margin-right: auto;
              margin-top: 4rem;
              animation: ${Loader} 0.7s linear infinite;
            `}
          />
        :
          <>
            {pokemonCollection.slice(0, fetchData).map((pokemon) => (
              <Link 
                href={`/details/${pokemon.name}`}
                key={pokemon.id}
              >
                <CardPokemonContent>
                  <Image 
                    src={pokemon.dreamworld}
                    alt={pokemon.name}
                    width={150}
                    height={150}
                  />
                  <h1>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                  </h1>
                </CardPokemonContent>
              </Link>
            ))}
          </>
       }
    </CardPokemonWrapper>
  );
};