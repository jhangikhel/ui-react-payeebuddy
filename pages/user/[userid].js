import { useRouter } from "next/router";


const UserId = () => {
	const router = useRouter();
	console.log(router.pathname, router.query);
	return <div>{router.query.userid}</div>;
};

export default UserId;
