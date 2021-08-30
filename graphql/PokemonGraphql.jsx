import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int) {
    pokemons(limit: $limit) {
      results {
        id
        name
        dreamworld
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      base_experience
      height
      weight
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      species {
        id
        name
      }
      held_items {
        item {
          id
          name
        }
      }
      order
    }
  }
`;