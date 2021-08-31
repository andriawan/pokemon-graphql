import { PokemonContext } from '../context/PokemonContext';
import { useContext, useEffect, useState } from 'react';
import Spinner from '../public/icons/Spinner';
import { css } from '@emotion/css';
import { Loader } from '../styled/components/PokemonCard';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import Pokeball from '../public/Pokeball.png';
import { GET_POKEMON_DETAIL, GET_POKEMONS } from '../graphql/PokemonGraphql';
import Success from './Alert/Success';
import Failed from './Alert/Failed';
import { 
  Bounce,
  ContentAbilities,
  ContentMoves,
  ContentSpecies,
  ContentTypes,
  PokemonDetailContent, 
  PokemonDetailWrapper, 
  TextSubtitle, 
  TextTitle, 
  WrapperAbilities, 
  WrapperContentAbilities, 
  WrapperContentMoves, 
  WrapperContentTypes, 
  WrapperDetail,
  WrapperExperience,
  WrapperHeight,
  WrapperMoves,
  WrapperSpecies,
  WrapperTypes,
  WrapperWeight,
  WrapperWeightHeight
} from '../styled/components/PokemonDetail';

export default function PokemonDetail({ name }) {
  const { 
    getPokemonDetail,
    namePokemon,
    setGetPokemon,
    setNamePokemon,  
    setGetPokemonDetail,
    myPokemon,
    showAlertSuccess,
    showAlertFailed,
    handleCatchPokemon
  } = useContext(PokemonContext);

  const { data: pokemon } = useQuery(GET_POKEMONS, { onCompleted: setGetPokemon });
  const { data: detailPoke, loading, error } = useQuery(GET_POKEMON_DETAIL,{ 
    variables: { name: namePokemon },
    onCompleted: setGetPokemonDetail
  });

  const pokemonDetail = !!getPokemonDetail && getPokemonDetail.pokemon;
  const imagePokemon = !!pokemon && pokemon.pokemons.results;
  const pokemonImage = !!imagePokemon && imagePokemon.find(
    (pokemon) => pokemon.name === name
  );

  useEffect(() => {
    setNamePokemon(name)
    setGetPokemonDetail(detailPoke)
    
    localStorage.setItem('list-my-pokemon', JSON.stringify(myPokemon))
    
    if(loading) return null;
    if(error) return `Error! ${error}`;
  }, [name, myPokemon])

  return (
    <PokemonDetailWrapper>
      {showAlertSuccess && (
        <Success 
          name={pokemonDetail.name}
        />
      )}
      {showAlertFailed && (
        <Failed 
          name={pokemonDetail.name}
        />
      )}
      <>
        { pokemonDetail === false
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
            <div className={css`
              display: flex; 
              flex-direction: column; 
              margin-left: auto;
              margin-right: auto;
              max-width: 900px;
              width: 100%;
            `}>
              <div 
                className={css`
                  cursor: pointer;
                  display: flex;
                  margin-top: 2rem;
                  width: 3rem;
                  margin-left: auto;
                  margin-right: auto;
                  animation: ${Bounce} 1s ease infinite;
                `}
                onClick={() => handleCatchPokemon(pokemonImage)}
              >
                <Image 
                  src={Pokeball}
                  alt="poke-ball"
                  width={50}
                  height={50}
                />
              </div>
                <h3 className={css`text-align: center;`}>
                  Click the Pokeball to catch {pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}
                </h3>
              <PokemonDetailContent>
                <div>
                  <TextTitle>
                    <h1>
                      {pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}
                    </h1>
                  </TextTitle>
                  <WrapperDetail>
                    <WrapperExperience>
                      <h5>Base Experience:</h5>
                      <span className={css`
                        margin-left: 5px; 
                        font-size: 13px;
                      `}>
                        {pokemonDetail.base_experience}
                      </span>
                    </WrapperExperience>
                    <WrapperWeightHeight>
                      <WrapperWeight>
                        <h5>Weight:</h5>
                        <span className={css`
                          margin-left: 5px; 
                          font-size: 13px;`
                        }>
                          {pokemonDetail.weight}
                        </span>
                      </WrapperWeight>
                      <WrapperHeight>
                        <h5>Height:</h5>
                        <span className={css`
                          margin-left: 5px; 
                          font-size: 13px;`
                        }>
                          {pokemonDetail.height}
                        </span>
                      </WrapperHeight>
                    </WrapperWeightHeight>
                  </WrapperDetail>
                  {pokemonImage.dreamworld && (
                    <Image 
                      src={pokemonImage.dreamworld}
                      alt={pokemonDetail.name}
                      width={400}
                      height={300}
                    />
                  )}
                </div>
                <div>
                  <WrapperAbilities>
                    <h1 className={css`${TextSubtitle} margin-top: 0rem !important;`}>Abilities</h1>
                    {pokemonDetail.abilities.length === 0
                      ?
                        <h1 className={css`
                          text-align: center;
                          color: #CC0000;
                        `}>
                          No Abilities
                        </h1>
                      :
                        <WrapperContentAbilities>
                          {pokemonDetail.abilities[0] && (
                            <ContentAbilities>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.abilities[0].ability.name}
                              </span>
                            </ContentAbilities>    
                          )}
                          {pokemonDetail.abilities[1] && (
                            <ContentAbilities>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.abilities[1].ability.name}
                              </span>
                            </ContentAbilities>    
                          )}
                          {pokemonDetail.abilities[2] && (
                            <ContentAbilities>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.abilities[2].ability.name}
                              </span>
                            </ContentAbilities>    
                          )}
                        </WrapperContentAbilities>
                    }
                  </WrapperAbilities>
                  <WrapperMoves>
                    <h1 className={css`${TextSubtitle}`}>Moves</h1>
                    {pokemonDetail.moves.length === 0
                      ?
                        <h1 className={css`
                          text-align: center;
                          color: #CC0000;
                        `}>
                          No Moves
                        </h1>
                      :
                        <WrapperContentMoves>
                          {pokemonDetail.moves[0] && (
                            <ContentMoves>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.moves[0].move.name}
                              </span>
                            </ContentMoves>
                          )}
                          {pokemonDetail.moves[1] && (
                            <ContentMoves>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.moves[1].move.name}
                              </span>
                            </ContentMoves>
                          )}
                          {pokemonDetail.moves[2] && (
                            <ContentMoves>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.moves[2].move.name}
                              </span>
                            </ContentMoves>
                          )}
                        </WrapperContentMoves>
                    }
                  </WrapperMoves>
                  <WrapperTypes>
                    <h1 className={css`${TextSubtitle}`}>Types</h1>
                    {pokemonDetail.types.length === 0
                      ?
                        <h1 className={css`
                          text-align: center;
                          color: #3B4CCA;
                        `}>
                          No Abilities
                        </h1>
                      :
                        <WrapperContentTypes>
                          {pokemonDetail.types[0] && (
                            <ContentTypes>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.types[0].type.name}
                              </span>
                            </ContentTypes>
                          )}
                          {pokemonDetail.types[1] && (
                            <ContentTypes>
                              <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                                {pokemonDetail.types[1].type.name}
                              </span>
                            </ContentTypes>
                          )}
                        </WrapperContentTypes>
                        
                    }
                  </WrapperTypes>
                  <WrapperSpecies>
                    <h1 className={css`${TextSubtitle}`}>Species</h1>
                    <ContentSpecies>
                      <span className={css`margin-left: auto; margin-right: auto; text-align: center;`}>
                        {pokemonDetail.species.name}
                      </span>
                    </ContentSpecies>
                  </WrapperSpecies>
                </div>
              </PokemonDetailContent>
            </div>
        }
      </>
    </PokemonDetailWrapper>
  )
}