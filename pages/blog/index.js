import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function BlogHome({ allPostsData }) {
    return (
        <Layout blog>
            <Head>
                <title>Blog</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Blog Home Page</p>
            </section>

            <section>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={'my-2'} key={id}>
                            <Link href={`/blog/${id}`}>
                                <a className={'hover:no-underline'}>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}