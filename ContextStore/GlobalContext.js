const { useState } = require("react");
const { createContext } = require("react");
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuOpenAndClose = () => {
        setMenuOpen(!isMenuOpen);
    }
    const valueToShare = {
        handleMenuOpenAndClose,
        isMenuOpen,
    }
    return (
        <GlobalContext.Provider value={valueToShare}>
            {children}
        </GlobalContext.Provider>
    )
}
export { GlobalProvider };
export default GlobalContext;