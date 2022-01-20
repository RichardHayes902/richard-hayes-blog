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
                Hello and welcome to my site. My name is Richard, and I'm a web developer living in Nova Scotia, Canada. <br />
                This site started out as a way for me to mess around and learn Next.js and began to morph into a project that
                I decided I would like to continue with.
            </p>
            <p className={'lg:w-1/2 w-full font-thin my-2'}>
                This site is a work in progress.
            </p>
            <p className={'lg:w-1/2 w-full text-center'}>
                Thanks for stopping by!
            </p>
        </section>
      </Layout>
  )
}
