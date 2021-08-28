import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import PokemonCard from '../components/PokemonCard';
import SearchPokemon from '../components/SearchPokemon';
import { SEOMeta } from '../seo/data';
import { 
  HomeContent, 
  HomeWrapper 
} from '../styled/pages/Home';
import GetPokemonsProvider from '../context/GetPokemonContext';

export default function Home() {
  return (
    <Layout>
      <NextSeo 
        title={SEOMeta.title}
        description={SEOMeta.description}
        noindex
        nofollow
      />
      <HomeWrapper>
        <HomeContent>
          <h1>
            Find your Pokemon, and Catch ém all!
          </h1>
          <SearchPokemon />
          <GetPokemonsProvider>
            <PokemonCard />
          </GetPokemonsProvider>
        </HomeContent>
      </HomeWrapper>
    </Layout>
  );
};