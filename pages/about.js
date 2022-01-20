import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout about>
            <Head>
                <title>About Me</title>
            </Head>
            <section className={'text-center py-4'}>
                <h1 className={"text-4xl font-semibold text-center"}>About Me</h1>
            </section>

            <section className={'mt-6 grid place-items-center'}>
                <p className={'lg:w-1/2 w-full font-thin text-center'}>
                    I've been a residential carpenter, a commercial dry-waller and roofer, web developer,
                    react native mobile developer, and a few other things.
                </p>
            </section>
        </Layout>
    )
}
