import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Image from 'next/image'
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
    const LOWER_CASE_TITLE = postData.title.toLowerCase()
    const BANNER_IMAGE_URL = `/images/boxes/${LOWER_CASE_TITLE}/${LOWER_CASE_TITLE}.png`

    return (
        <Layout blogPost>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <div className={'pt-6 grid place-items-center'}>
                    <h1 className={"text-4xl font-semibold"}>{postData.title}</h1>
                    <div className={"text-neutral-500 dark:text-neutral-600 mb-2"}>
                        <Date dateString={postData.date} />
                    </div>
                    <div className={"h-48 w-full md:h-96 md:w-full relative justify-self-center z-0 mb-1"}>
                        <Image
                            priority
                            src={BANNER_IMAGE_URL}
                            alt={postData.title}
                            layout="fill"
                            objectFit="contain"
                            className="self-center"
                        />
                    </div>
                    <div className={"prose prose-md lg:prose-xl dark:prose-dark w-full"} dangerouslySetInnerHTML={{ __html: postData.htmlString }} />
                </div>
            </article>
        </Layout>
    )
}
