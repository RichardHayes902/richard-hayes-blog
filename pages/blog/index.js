import Head from 'next/head'
import Layout from '../../components/layout'
import { Blog_Post_Card } from "../../components/blog-post-card";
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
            <section className={'text-center py-4'}>
                <h1 className={"text-4xl font-semibold text-center"}>Blog Home Page</h1>
            </section>

            <section className={'mt-6'}>
                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'}>
                    {allPostsData.map(({ id, date, title }) => (
                        <Blog_Post_Card
                            key={id}
                            id={id}
                            date={date}
                            title={title}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}