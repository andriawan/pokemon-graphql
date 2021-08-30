import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import PokemonProvider from '../../context/PokemonContext';
import PokemonDetail from '../../components/PokemonDetail';

export default function PokemonDetails() {
  const router = useRouter();
  let { name } = router.query;

  return (
    <Layout>
      <NextSeo 
        title={!!name && name.toString().charAt(0).toUpperCase() + name.slice(1)}
      />
      <PokemonProvider>
        <PokemonDetail name={name}/>
      </PokemonProvider>
    </Layout>
  );
};
