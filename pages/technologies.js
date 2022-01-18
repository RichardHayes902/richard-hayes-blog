import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Technologies() {

    const tech = [
        {
            name: "Tailwind.css",
            info_url: "https://tailwindcss.com/",
            image_url: "/images/tailwindcss.svg"
        },
        {
            name: "React.js",
            info_url: "https://reactjs.org/",
            image_url: "/images/reactjs.svg"
        },
        {
            name: "Laravel",
            info_url: "https://laravel.com/",
            image_url: "/images/laravel.svg"
        }
    ]

    return (
        <Layout technologies>
            <Head>
                <title>Technologies</title>
            </Head>
            <section>
                <h1 className={"text-4xl font-semibold text-center"}>Technologies</h1>
            </section>

            <section>
                <div className={"grid grid-cols-4 gap-4"}>
                    {
                        tech.map((el) => {
                            return(
                                <div className="rounded-lg shadow-black dark:shadow-white shadow-md hover:shadow-xl dark:bg-themeDark bg-cardLight py-6 px-10 justify-center" key={el.name}>
                                    <a href={el.info_url} target={"_blank"} className={"w-100"}>
                                        <Image
                                            src={el.image_url}
                                            alt={el.name}
                                            width={60}
                                            height={60}
                                        />
                                    </a>
                                    <p className={"text-center"}>{el.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </Layout>
    )
}
