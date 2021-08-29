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
          artwork
          dreamworld
        }
      }
    }
    `,
  variables: { offset: null }
});