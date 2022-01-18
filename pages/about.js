import Head from 'next/head'
import Layout from '../components/layout'

export default function AboutMe() {
    return (
        <Layout about>
            <Head>
                <title>About</title>
            </Head>
            <section>
                <h1 className={"text-4xl font-semibold text-center"}>About</h1>
            </section>

            <section>

            </section>
        </Layout>
    )
}