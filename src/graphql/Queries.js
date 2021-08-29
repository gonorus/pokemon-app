import { gql } from '@apollo/client';
import GraphqlClient from './Configuration';

export const LOAD_POKEMON_LIST = GraphqlClient.watchQuery({
  query: gql`
    query pokemons($offset: Int!){
      pokemons(limit:50, offset:$offset) {
        count
        nextOffset
        results {
          id
          name
          image
        }
      }
    }
    `,
  variables: { offset: null }
});

export const LOAD_POKEMON_DATA = gql`
  query pokemon($name: String!){
    pokemon(name:$name) {
      name
      base_experience
      height
      weight
      moves {
        move {
          name
          url
        }
      }
      abilities {
        ability {
          name
          url
        }
      }
      sprites {
        back_default
        front_default
      }
      types {
        type {
          id
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
    }
  }
`;