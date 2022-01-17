import Head from 'next/head'
import Image from 'next/image'
import Layout, {name} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import campfire from "../public/images/campfire-g6fa712b0d_640.png";

export default function Custom404() {
    return (
        <Layout fourOhFour>
            <Head>
                <title>404</title>
            </Head>

            <section className={'text-center'}>
                <h1 className={utilStyles.headingXl}>You appear to be lost</h1>
            </section>

            <section className={'text-center my-3'}>
                <Image
                    priority
                    src={campfire}
                    height={150}
                    width={200}
                    alt={name}
                />
                <br />
                {/*<small>*/}
                {/*    Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576382">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576382">Pixabay</a>*/}
                {/*</small>*/}
            </section>

            <section className={'text-center'}>
                <p className={'text-xs'}>There's no reason to panic. Rest here for a while, traveler.</p>
            </section>
        </Layout>
    )
}