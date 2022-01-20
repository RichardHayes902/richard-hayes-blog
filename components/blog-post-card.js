import Date from './date'
import Link from "next/link";

export const Blog_Post_Card = ({id, title, date, tag, subtag1, subtag2, subtag3}) => {
    return (
        <Link href={`/blog/${id}`}>
            <a className={'my-2 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-md hover:no-underline shadow-md hover:shadow-xl dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1)] hover:dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.1)]'}>
                <p>{title}</p>
                <br />
                <small className={'text-neutral-500 dark:text-neutral-600'}>
                    <Date dateString={date} />
                </small>
                <div className={'my-4'}>
                    <hr />
                </div>
                <div className={'flex flex-row items-center'}>
                    <p className={'dark:text-white mr-2 text-xs font-thin'}>Tag:</p>
                    <div className={'bg-slate-600 px-3 rounded-full'}>
                        <p className={'text-white text-xs font-thin'}>{tag}</p>
                    </div>
                </div>
                <div className={'flex flex-row items-center mt-2'}>
                    <div className={'dark:bg-blue-900 bg-blue-500 px-3 rounded-full'}>
                        <p className={'text-white text-xs font-thin'}>{subtag1}</p>
                    </div>
                    <div className={'dark:bg-cyan-900 bg-cyan-500 px-3 mx-2 rounded-full'}>
                        <p className={'text-white text-xs font-thin'}>{subtag2}</p>
                    </div>
                    <div className={'dark:bg-red-900 bg-red-500 px-3 rounded-full'}>
                        <p className={'text-white text-xs font-thin'}>{subtag3}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}