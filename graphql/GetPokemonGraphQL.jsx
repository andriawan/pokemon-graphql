import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int) {
    pokemons(limit: $limit) {
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;