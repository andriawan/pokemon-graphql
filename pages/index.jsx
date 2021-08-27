import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import { SEOMeta } from '../seo/data';

export default function Home() {
  return (
    <Layout>
      <NextSeo 
        title={SEOMeta.title}
        description={SEOMeta.description}
        noindex
        nofollow
      />
    </Layout>
  )
}
