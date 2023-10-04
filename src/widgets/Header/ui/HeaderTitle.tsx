import {NavbarContent, NavbarItem} from "@nextui-org/navbar";

export const HeaderTitle = () => {
    return (
        <NavbarContent justify={'end'} className={'hidden sm:flex'}>
            <NavbarItem>
                <p className={'block font-bold text-2xl text-white'}>
                    Список компаний
                </p>
            </NavbarItem>
        </NavbarContent>
    )
}