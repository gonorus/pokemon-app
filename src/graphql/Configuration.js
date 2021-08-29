import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const _errorLink = onError(
  ({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(
        ({ message, location, path }) => {
          alert(`Graphql error ${message}`);
        }
      )
    }
  }
);

const _link = from([
  _errorLink,
  new HttpLink({ uri: 'https://graphql-pokeapi.vercel.app/api/graphql' }),
]);

const GraphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: _link
});
export default GraphqlClient;