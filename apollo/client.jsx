import { 
  ApolloClient, 
  createHttpLink, 
  InMemoryCache 
} from '@apollo/client';

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.GET_POKEMON
  }),
  cache: new InMemoryCache(),
})