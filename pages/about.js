import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function AboutMe() {
    return (
        <Layout about>
            <Head>
                <title>About</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>About Me Page</p>
            </section>
        </Layout>
    )
}