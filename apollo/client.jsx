import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.GET_POKEMON
})