import '../styled/global.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';
import PokemonProvider from '../context/PokemonContext';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </ApolloProvider>
  )
}

export default MyApp
