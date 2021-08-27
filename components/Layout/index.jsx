import Footer from '../Footer';
import Navbar from '../Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link 
          rel="shortcut icon" 
          href="../../PokemonIcon.ico"
        />
      </Head>

      <Navbar />
        { children }
      <Footer />
    </div>
  )
}