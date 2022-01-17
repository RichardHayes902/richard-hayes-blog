import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Technologies() {
    return (
        <Layout technologies>
            <Head>
                <title>Technologies</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Technologies Page</p>
            </section>
        </Layout>
    )
}
