import gql from 'graphql-tag';

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
      stats {
        base_stat
        effort
        stat {
          id
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
        version_details {
          rarity
          version {
            id
            name
          }
        }
      }
      order
    }
  }
`;