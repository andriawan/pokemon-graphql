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
import PokemonProvider from '../context/PokemonContext';

export default function Home() {
  const [fetchData, setFetchData] = useState(6)
  useEffect(() => {
    const scrollHandler = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if(scrolled === scrollable) {
        setFetchData(prev => prev + 6)
      }
    }
    window.addEventListener('scroll', scrollHandler)
    
    return() => window.removeEventListener('scroll', scrollHandler)
  }, [])
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
          <PokemonProvider>
            <PokemonCard fetchData={fetchData}/>
          </PokemonProvider>
        </HomeContent>
      </HomeWrapper>
    </Layout>
  );
};