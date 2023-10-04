import {AddModal} from "@/features/AddModal";
import {Header} from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <div id={'modals-root'}>
                <AddModal/>
            </div>
            <main
                className={'bg-no-repeat bg-center bg-cover relative flex flex-col justify-between h-screen overflow-y-auto overflow-x-hidden'}
                style={{backgroundImage: 'url(/company-bg.jpg)'}}>
                <Header/>
                {children}
                <Footer/>
            </main>
        </>
    )
}