import Head from 'next/head'
import Layout from '../components/layout'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai/index"
import { MdEmail } from "react-icons/md/index"
import { HTB_Badge } from "../components/htb-badge";

export default function Contact() {
    return (
        <Layout contact>
            <Head>
                <title>Contact</title>
            </Head>
            <section className={'text-center py-4'}>
                <h1 className={"text-4xl font-semibold text-center"}>Contact Me</h1>
            </section>

            <section className={'mt-6 grid place-items-center'}>
                <p className={'lg:w-1/2 w-full font-thin text-center'}>
                    I can be reached or found here:
                </p>
            </section>

            <section className={'mt-6 grid place-items-center'}>
                <div className={'grid grid-cols-3 gap-4 mb-4'}>
                    <a href={"https://www.linkedin.com/in/richard-hayes-243650163/"} target={"_blank"}>
                        <AiFillLinkedin size={66} />
                    </a>
                    <a href={"https://github.com/RichardHayes902"} target={"_blank"}>
                        <AiFillGithub size={66} />
                    </a>
                    <a href={"https://www.linkedin.com/in/richard-hayes-243650163/"} target={"_blank"}>
                        <MdEmail size={66} />
                    </a>
                </div>
                <HTB_Badge />
            </section>

        </Layout>
    )
}