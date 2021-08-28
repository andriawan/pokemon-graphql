import { NextSeo } from 'next-seo'
import { useState, useEffect } from 'react';
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
  const [fetchData, setFetchData] = useState(6)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if(scrolled === scrollable) {
        setFetchData(prev => prev + 6)
      }
    })
  })
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
            <PokemonCard fetchData={fetchData}/>
          </GetPokemonsProvider>
        </HomeContent>
      </HomeWrapper>
    </Layout>
  );
};