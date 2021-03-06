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
                <h1 className={"text-4xl font-semibold text-center"}>Blog</h1>
            </section>

            <section className={'my-8'}>
                <p className={'mb-2 font-thin'}>
                    This blog will be a place for me to document my thought-process and approach to my hobbies
                    of:
                </p>
                <ul className={'list-disc ml-6 mb-3'}>
                    <li className={'font-thin'}>learning computer security and pentesting via <a target={'_blank'} href={'https://www.hackthebox.eu'}>Hack the Box</a></li>
                    <li className={'font-thin'}>locksport</li>
                    <li className={'font-thin'}>anything else that grabs my attention</li>
                </ul>
                <hr />
            </section>

            <section className={'mt-6'}>
                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'}>
                    {allPostsData.map(({ id, date, title, tag, subtag1, subtag2, subtag3 }) => (
                        <Blog_Post_Card
                            key={id}
                            id={id}
                            date={date}
                            title={title}
                            tag={tag}
                            subtag1={subtag1}
                            subtag2={subtag2}
                            subtag3={subtag3}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}