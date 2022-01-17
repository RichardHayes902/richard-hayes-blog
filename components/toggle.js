import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from "react-icons/ri/index"

export const Toggle = () => {
    const {theme, setTheme} = useTheme()
    const toggleTheme = () => setTheme(theme == 'light' ? 'dark' : 'light')

    return (
        <>
            <div className={"flex flex-row lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center hover:bg-themeTan dark:hover:bg-black"}>
                <RiSunFill color={theme == 'light' ? '#ffad00' : 'gray'} size={26} />
                <button onClick={toggleTheme} className={"mx-2"}>
                    <div className={"text-black hover:text-black dark:text-white hover:no-underline"}>Change theme</div>
                </button>
                <RiMoonFill color={theme == 'dark' ? 'white' : 'gray'} size={26} />
            </div>
            <span className="sr-only">{theme == 'light' ? 'change theme to dark mode' : 'change theme to light mode'}</span>
        </>
    )
}