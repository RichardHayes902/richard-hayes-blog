import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout blogPost>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={"text-4xl font-semibold"}>{postData.title}</h1>
                <div className={"text-neutral-500 dark:text-neutral-600 mb-4"}>
                    <Date dateString={postData.date} />
                </div>
                <div className={"prose dark:prose-dark"} dangerouslySetInnerHTML={{ __html: postData.htmlString }} />
            </article>
        </Layout>
    )
}
