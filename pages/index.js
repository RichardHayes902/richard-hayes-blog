import Head from 'next/head'
import Layout, { name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home ()  {
  return (
      <Layout home>
        <Head>
          <title>{name}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi there, and welcome to my page</p>
        </section>
      </Layout>
  )
}
