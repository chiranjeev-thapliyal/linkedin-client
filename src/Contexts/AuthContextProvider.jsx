import { createContext, useState } from "react"


export const AuthContext = createContext({
    handleLogin: () => { },
    handleLogout: () => { },
    token: "",
    isAuth: Boolean
})

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");


    const handleLogin = (e) => {
        setIsAuth(true);
        setToken(e);
    }

    const handleLogout = () => {
        setIsAuth(false);
        setToken("");
    }

    const value = {
        handleLogin,
        handleLogout,
        token,
        isAuth
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}