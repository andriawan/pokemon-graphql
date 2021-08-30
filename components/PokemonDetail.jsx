import { PokemonContext } from '../context/PokemonContext';
import { useContext, useEffect } from 'react';
import Spinner from '../public/icons/Spinner';
import { css } from '@emotion/css';
import { Loader } from '../styled/components/PokemonCard';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../graphql/PokemonGraphql';

export default function PokemonDetail({ name }) {
  const { 
    getPokemonDetail,
    namePokemon,
    setNamePokemon,  
    setGetPokemonDetail 
  } = useContext(PokemonContext);
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL,{ 
    variables: namePokemon,
    onCompleted: setGetPokemonDetail
  });
  
  console.log(namePokemon);

  useEffect(() => {
    setNamePokemon(name)

    if(loading) return null;
    if(error) return `Error! ${error}`;
  }, [name])

  return (
    <div>
      {/* { pokemonDetail.base_experience === null 
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
          <div>
            <h1>
              {pokemonDetail.name.toString().charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}
            </h1>
            <Image 
              src={pokemonImage}
              alt={pokemonDetail.name}
              width={150}
              height={150}
            />
          </div>
      } */}
    </div>
  )
}