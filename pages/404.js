import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import campfire from "../public/images/campfire-g6fa712b0d_640.png";

export default function Custom404() {
    return (
        <Layout fourOhFour>
            <Head>
                <title>404</title>
            </Head>

            <section className={'text-center py-4'}>
                <h1 className={"text-4xl font-semibold text-center"}>You appear to be lost</h1>
            </section>

            <div className={'my-10 grid'}>
                <div className={"h-52 w-64 md:h-72 md:w-96 relative justify-self-center"}>
                    <Image
                        src={campfire}
                        priority
                        alt={'404'}
                        layout="fill"
                        objectFit="cover"
                        className="self-center"
                    />
                </div>
            </div>

            <section className={'text-center pb-10'}>
                <p className={'md:text-sm text-xs'}>There's no reason to panic. Rest here for a while, traveler.</p>
            </section>
        </Layout>
    )
}