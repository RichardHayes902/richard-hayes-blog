import Date from './date'
import Link from "next/link";

export const Blog_Post_Card = (props) => {
    return (
        <Link href={`/blog/${props.id}`}>
            <a className={'my-2 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-md hover:no-underline shadow-md hover:shadow-xl dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1)] hover:dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.1)]'}>
                <p>{props.title}</p>
                <br />
                <small className={'text-neutral-500 dark:text-neutral-600'}>
                    <Date dateString={props.date} />
                </small>
                <div className={'my-4'}>
                    <hr />
                </div>
                <div className={'flex flex-row items-center'}>
                    <p className={'text-white mr-2 text-xs'}>Tag:</p>
                    <div className={'bg-slate-600 px-3 rounded-full'}>
                        <p className={'text-white text-xs'}>{props.tag}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}