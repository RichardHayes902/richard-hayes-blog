import Head from 'next/head'
import Layout, { name } from '../components/layout'

export default function Home ()  {
  return (
      <Layout home>
        <Head>
          <title>{name}</title>
        </Head>
        <section className={'pt-6 grid place-items-center'}>
          <p className={'lg:w-1/2 w-full font-thin'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </Layout>
  )
}
