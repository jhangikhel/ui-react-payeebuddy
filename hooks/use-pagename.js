import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { getPageName } from "../utility/shared";

const usePageName = () => {
    const [pageName, setPageName] = useState('');
    const router = useRouter();
    useEffect(() => {
        if (router.pathname) {
            const name = getPageName(router.pathname);
            setPageName(name);
        }
    }, [router.pathname]);

    return { pageName }
}
export default usePageName;