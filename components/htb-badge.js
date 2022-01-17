import Image from 'next/image'

export const HTB_Badge = () => {
    return (
        <a href={"https://app.hackthebox.com/profile/138350"} target={"_blank"}>
            <Image
                src="https://www.hackthebox.eu/badge/image/138350"
                alt="Hack the Box user badge"
                width={220}
                height={50}
            />
        </a>
    )
}