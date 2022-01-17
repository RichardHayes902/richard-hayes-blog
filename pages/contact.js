import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
    return (
        <Layout contact>
            <Head>
                <title>Contact</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Contact Page</p>
            </section>
        </Layout>
    )
}