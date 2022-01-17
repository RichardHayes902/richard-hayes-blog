import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function BlogHome() {
    return (
        <Layout blog>
            <Head>
                <title>Blog</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Blog Home Page</p>
            </section>
        </Layout>
    )
}