import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Navbar } from "./navbar";
import profilePic from "/public/images/me.png"

export const name = 'Richard Hayes'

export default function Layout({ children, home }) {
    return (
        <body className={"bg-white dark:bg-trueGray-800 flex flex-col min-h-screen"}>
            <Navbar />
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.vercel.app/${encodeURI(
                            name
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={name} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>

                <header className={styles.header}>
                    {home ? (
                        <div style={{ marginBottom: '40px' }}>
                            <Image
                                priority
                                src={profilePic}
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </header>

                <main>{children}</main>

                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
        </body>
    )
}
