import {useRouter} from "next/router";
import {useEffect} from "react";


// Пушим на /home при роуте "/"
const Index = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/home');
    }, [router]);

    return null;
}

export default Index