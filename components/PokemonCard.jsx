import { 
  CardPokemonWrapper,
  CardPokemonContent,
  Loader
} from '../styled/components/PokemonCard';
import { PokemonContext } from '../context/PokemonContext';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Spinner from '../public/icons/Spinner';
import { css } from '@emotion/css';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_POKEMONS } from '../graphql/PokemonGraphql';

export default function PokemonCard() {
  const { getPokemon, setGetPokemon, fetchData } = useContext(PokemonContext);
  const { data, loading, error } = useQuery(GET_POKEMONS, { onCompleted: setGetPokemon });
  const pokemonCollection = !!getPokemon && getPokemon.pokemons.results || [];

  useEffect(() => {
    setGetPokemon(data)

    if(loading) return null;
    if(error) return `Error! ${error}`;
  }, [data])

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