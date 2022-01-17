import Link from 'next/link';
import {useState} from 'react';
import {Toggle} from "./toggle";

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    /**
     * Menu link button
     * @param text {String} text to be displayed
     * @param link {String} root-relative link to navigate to
     * @returns {JSX.Element}
     */
    const MenuItem = ({text, link}) => (
        <Link href={link}>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white items-center justify-center hover:bg-themeTan dark:hover:bg-black hover:text-black hover:no-underline dark:hover:text-white navbarName '>
                {text}
            </a>
        </Link>
    )

    return (
        <div>
            <nav className='flex items-center flex-wrap bg-white dark:bg-trueGray-900 p-3 '>
                <h1 className={'text-black dark:text-white text-xl inline-flex items-center p-2 mr-4 hover:no-underline'}>Richard Hayes</h1>

                <button
                    className=' inline-flex p-3 hover:bg-themeYellow dark:hover:bg-black rounded lg:hidden text-black dark:text-white ml-auto outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>

                {
                    active ?
                        <div className={'w-full lg:inline-flex lg:flex-grow lg:w-auto'}>
                            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                                <MenuItem link={'/'} text={'Home'}/>
                                <MenuItem link={'/blog'} text={'Blog'}/>
                                <MenuItem link={'/technologies'} text={'Technologies'}/>
                                <MenuItem link={'/about'} text={'About me'}/>
                                <MenuItem link={'/contact'} text={'Contact'}/>
                                <Toggle/>
                            </div>
                        </div>
                    :
                        <div className={'hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'}>
                            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                                <MenuItem link={'/'} text={'Home'}/>
                                <MenuItem link={'/blog'} text={'Blog'}/>
                                <MenuItem link={'/technologies'} text={'Technologies'}/>
                                <MenuItem link={'/about'} text={'About me'}/>
                                <MenuItem link={'/contact'} text={'Contact'}/>
                                <Toggle/>
                            </div>
                        </div>
                }
            </nav>
        </div>
    );
};