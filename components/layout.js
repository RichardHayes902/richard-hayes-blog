import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Navbar } from "./navbar";
import profilePic from "/public/images/me.png"

export const name = 'Richard Hayes'

export default function Layout({ children, home, fourOhFour, blog, blogPost, about, contact, technologies }) {
    return (
        <body className={"bg-white dark:bg-trueGray-800 flex flex-col min-h-screen"}>
            <Navbar />
            <div className={'px-6 pt-6 pb-12'}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Richard Hayes Personal Website and Blog"
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

                <div className={'flex-1 self-center mb-4'}>
                    {home && (
                        <div className={'text-center'}>
                            <Image
                                priority
                                src={profilePic}
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            />
                        </div>
                    )}
                </div>

                <main>{children}</main>

                {
                    technologies || contact || about || blog ?
                        (
                            <div className={'text-center pt-8'}>
                                <Link href="/">
                                    <a className={'hover:no-underline'}>← Back to home</a>
                                </Link>
                            </div>
                        )
                    : fourOhFour ?
                        (
                            <div className={styles.backToHome}>
                                <Link href="/">
                                    <a className={'hover:no-underline'}>← Back on the path</a>
                                </Link>
                            </div>
                        )
                    : blogPost ?
                        (
                            <div className={styles.backToHome}>
                                <Link href="/blog">
                                    <a className={'hover:no-underline'}>← Blog Home</a>
                                </Link>
                            </div>
                        )
                    : // home
                        ( <></> )
                }
            </div>
        </body>
    )
}
