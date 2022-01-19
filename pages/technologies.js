import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Technologies() {

    const tech = [
        {
            name: "HTML5",
            info_url: "https://html.spec.whatwg.org/multipage/",
            image_url: "/images/html.svg"
        },
        {
            name: "CSS3",
            info_url: "https://www.w3.org/Style/CSS/",
            image_url: "/images/css.svg"
        },
        {
            name: "PHP",
            info_url: "https://www.php.net/",
            image_url: "/images/php.svg"
        },
        {
            name: "JavaScript",
            info_url: "https://laravel.com/",
            image_url: "/images/javascript.svg"
        },
        {
            name: "React.js",
            info_url: "https://reactjs.org/",
            image_url: "/images/reactjs.svg"
        },
        {
            name: "React Native",
            info_url: "https://reactnative.dev/",
            image_url: "/images/reactjs.svg"
        },
        {
            name: "Laravel",
            info_url: "https://laravel.com/",
            image_url: "/images/laravel.svg"
        },

        {
            name: "Tailwind.css",
            info_url: "https://tailwindcss.com/",
            image_url: "/images/tailwindcss.svg"
        },

    ]

    return (
        <Layout technologies>
            <Head>
                <title>Technologies</title>
            </Head>
            <section className={'text-center py-4'}>
                <h1 className={"text-4xl font-semibold text-center"}>Technologies</h1>
            </section>

            <section className={'mt-6'}>
                <div className={"grid grid-cols-2 md:grid-cols-4 gap-4"}>
                    {
                        tech.map((el) => {
                            return(
                                <a href={el.info_url} target={"_blank"} key={el.name} className={"text-center hover:no-underline rounded-lg bg-neutral-50 dark:bg-neutral-900 py-7 px-10 justify-center text-center"}>
                                    <Image
                                        src={el.image_url}
                                        alt={el.name}
                                        width={60}
                                        height={60}
                                    />
                                    <br />
                                    <p className={'text-black dark:text-white text-sm'}>{el.name}</p>
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </Layout>
    )
}
