import Head from 'next/head'
import Layout, { name } from '../components/layout'

export default function Home ()  {
  return (
      <Layout home>
        <Head>
          <title>{name}</title>
        </Head>
        <section className={'text-center pt-4'}>
          <p>Hi there, and welcome to my page</p>
        </section>
      </Layout>
  )
}
