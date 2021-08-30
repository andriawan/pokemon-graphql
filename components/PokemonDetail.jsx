import { PokemonContext } from '../context/PokemonContext';
import { useContext, useEffect } from 'react';
import Spinner from '../public/icons/Spinner';
import { css } from '@emotion/css';
import { Loader } from '../styled/components/PokemonCard';

export default function PokemonDetail({ name }) {
  const { setNamePokemon, ...data } = useContext(PokemonContext)
  const pokemonDetail = !!data && data.getPokemonDetail.data.pokemon;
  
  useEffect(() => {
    setNamePokemon(name)
  }, [name])

  console.log(pokemonDetail)

  return (
    <div>
      { pokemonDetail.base_experience === null 
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
          </div>
      }
    </div>
  )
}