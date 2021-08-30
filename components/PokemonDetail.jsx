import { PokemonContext } from '../context/PokemonContext';
import { useContext, useEffect } from 'react';
import Spinner from '../public/icons/Spinner';
import { css } from '@emotion/css';
import { Loader } from '../styled/components/PokemonCard';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import Pokeball from '../public/Pokeball.png';
import { GET_POKEMON_DETAIL, GET_POKEMONS } from '../graphql/PokemonGraphql';
import { 
  Bounce,
  ContentAbilities,
  ContentMoves,
  ContentSpecies,
  ContentTypes,
  PokemonDetailContent, 
  PokemonDetailWrapper, 
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
    setGetPokemonDetail 
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
  console.log(pokemonDetail);
  useEffect(() => {
    setNamePokemon(name)
    setGetPokemonDetail(detailPoke)
    
    if(loading) return null;
    if(error) return `Error! ${error}`;
  }, [name])

  return (
    <PokemonDetailWrapper>
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
            <PokemonDetailContent>
              <TextTitle>
                <h1>
                  {pokemonDetail.name.toString().charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}
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
              <Image 
                src={pokemonImage.dreamworld}
                alt={pokemonDetail.name}
                width={400}
                height={300}
              />
              <WrapperAbilities>
                <h1 className={css`text-align: center;`}>Abilities</h1>
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
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.abilities[0].ability.name}
                          </span>
                        </ContentAbilities>    
                      )}
                      {pokemonDetail.abilities[1] && (
                        <ContentAbilities>
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.abilities[1].ability.name}
                          </span>
                        </ContentAbilities>    
                      )}
                      {pokemonDetail.abilities[2] && (
                        <ContentAbilities>
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.abilities[2].ability.name}
                          </span>
                        </ContentAbilities>    
                      )}
                    </WrapperContentAbilities>
                }
              </WrapperAbilities>
              <WrapperMoves>
                <h1 className={css`text-align: center;`}>Moves</h1>
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
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.moves[0].move.name}
                          </span>
                        </ContentMoves>
                      )}
                      {pokemonDetail.moves[1] && (
                        <ContentMoves>
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.moves[1].move.name}
                          </span>
                        </ContentMoves>
                      )}
                      {pokemonDetail.moves[2] && (
                        <ContentMoves>
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.moves[2].move.name}
                          </span>
                        </ContentMoves>
                      )}
                    </WrapperContentMoves>
                }
              </WrapperMoves>
              <WrapperTypes>
                <h1 className={css`text-align: center;`}>Types</h1>
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
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.types[0].type.name}
                          </span>
                        </ContentTypes>
                      )}
                      {pokemonDetail.types[1] && (
                        <ContentTypes>
                          <span className={css`margin-left: auto; margin-right: auto;`}>
                            {pokemonDetail.types[1].type.name}
                          </span>
                        </ContentTypes>
                      )}
                    </WrapperContentTypes>
                    
                }
              </WrapperTypes>
              <WrapperSpecies>
                <h1 className={css`text-align: center;`}>Species</h1>
                <ContentSpecies>
                  <span className={css`margin-left: auto; margin-right: auto;`}>
                    {pokemonDetail.species.name}
                  </span>
                </ContentSpecies>
              </WrapperSpecies>
              <div 
                className={css`
                  margin-top: 3rem;
                  cursor: pointer;
                  animation: ${Bounce} 1s ease infinite;
                `}
                // onClick={}
              >
                <Image 
                  src={Pokeball}
                  alt="poke-ball"
                  width={200}
                  height={200}
                />
              </div>
              <h3>Click the Pokeball to catch {pokemonDetail.name.toString().charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}</h3>
            </PokemonDetailContent>
        }
      </>
    </PokemonDetailWrapper>
  )
}