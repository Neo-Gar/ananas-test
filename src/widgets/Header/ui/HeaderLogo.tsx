import {NavbarBrand, NavbarContent} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <NavbarContent justify={'start'}>
            <NavbarBrand>
                <Link
                    href={'https://ananas-web.ru'}
                    className={'group flex flex-row justify-start items-center hover:opacity-90 transition ease-in-out duration-100'}>
                    <Image
                        src={'/logo-ananas.svg'}
                        alt={'Ananas Logo'}
                        title={'Ananas Logo'}
                        width={50}
                        height={44}
                    />
                    <p className={'block font-bold text-xl ml-4 text-white after:block after:bg-black after:w-full after:h-[2px] after:opacity-0 group-hover:after:opacity-100'}>
                        Ananas Front-end test
                    </p>
                </Link>
            </NavbarBrand>
        </NavbarContent>
    )
}