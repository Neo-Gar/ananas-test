import {Navbar} from "@nextui-org/navbar";
import {HeaderLogo} from "./HeaderLogo";
import {HeaderTitle} from "./HeaderTitle";

export const Header = () => {
    return (
        <Navbar
            height={'5rem'}
            maxWidth={'2xl'}
            isBlurred={true}
            shouldHideOnScroll
            className={'border-none bg-background/40 shadow-md'}
        >
            <HeaderLogo/>
            <HeaderTitle/>
        </Navbar>
    )
}