import axios from "axios";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import cookie from 'cookie';

const providers = (req, res) => [
    Credentials({
        name: "credentials",
        async authorize(credentials, req) {
            try {
                const { userName: username, password } = credentials;
                const result = await axios.post('http://45.56.125.158:3001/auth/signin', {
                    username,
                    password
                });

                if (result.data.accessToken) {
                    res.setHeader('Set-Cookie',
                        cookie.serialize('token', result.data.accessToken, {
                            httpOnly: true,
                            secure: false,
                            maxAge: 60 * 60 * 24 * 7,
                            sameSite: 'strict',
                            path: '/'
                        }))
                    return result;
                }
                return null;
            }
            catch (e) {
                throw new Error(e);
            }
        }
    })
];

const callbacks = {
    jwt: async ({ token, user }) => {
        console.log("TTT", token, user);
        return Promise.resolve(token);
    },
    session: async ({ session, token, ...p }) => {
        console.log("SSS", token, session.request);
        return Promise.resolve(session);
    },
    redirect: async ({ url, baseUrl }) => {

        return baseUrl;
    }
};


const options = (req, res) => {

    return {
        providers: providers(req, res),
        callbacks,
        pages: {},
        secret: 'payeeBuddy'
    }
};

export const Auth = (req, res) => {

    return NextAuth(req, res, options(req, res))
}
export default Auth;