import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { getPageName } from '../../utility/shared';
const PageTitle = () => {
    const router = useRouter();
    const [pageName, setPageName] = useState('');
    useEffect(() => {
        if (router.pathname) {
            const name = getPageName(router.pathname);
            setPageName(name);
        }
    }, [router.pathname])
    return (<title>
        {pageName}
    </title>
    )
}
export default PageTitle;