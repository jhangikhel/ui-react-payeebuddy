import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react"
import { GlobalProvider } from "../ContextStore/GlobalContext";
import PageTitle from "../component/shared/PageTitle";
import HeaderAuth from "../component/shared/HeaderAuth";
import NotFoundPage from "./404";
const clientSideEmotionCache = createEmotionCache();
const MyApp = (props) => {
	// eslint-disable-next-line no-unused-vars
	const { Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps } } = props;
	return (
		<>
			<PageTitle></PageTitle>
			<SessionProvider session={session}>
				<CacheProvider value={emotionCache}>
					<GlobalProvider>
						<ThemeProvider theme={lightTheme}>
							<CssBaseline />
							{Component.auth ? (
								<Auth>
									<Component {...pageProps} />
								</Auth>
							) : (
								<>
									<HeaderAuth >
									 	<Component {...pageProps} />  
									
									</HeaderAuth>
								</>
							)}
						</ThemeProvider>
					</GlobalProvider>
				</CacheProvider>
			</SessionProvider>
		</>
	);
};
export default MyApp;
function Auth({ children }) {
	const { data: session, status } = useSession();
	const isUser = !!session?.user
	React.useEffect(() => {
		if (status === "loading") return
		if (!isUser) signIn()
	}, [isUser, status])
	if (isUser) {
		return children
	}
	// Session is being fetched, or no user.
	// If no user, useEffect() will redirect.
	return <div>Loading...</div>
}
