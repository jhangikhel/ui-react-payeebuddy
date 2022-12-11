import { createContext, useState } from "react";
const LoginContext = createContext();



function Provider({ children }) {
      const [authIsLoading, setAuthIsLoading] = useState(false);
    
    const login = (email, password) => {
        setAuthIsLoading(true);
       
        
        fetchLogin(email, password, error => {
         setAuthIsLoading(false);

           
        })
    }
    const valueToShare = {

        login,
        authIsLoading
    };
    return (<LoginContext.Provider value={valueToShare}>
        {children}
    </LoginContext.Provider>)
}
const fetchLogin = (email, password, callback) =>
    setTimeout(() => {
        if (email === 'admin' && password === 'admin') {
            return callback(null);
        } else {
            return callback(new Error('Invalid email and password'));
        }
    }, 2000);
export { Provider };
export default LoginContext;