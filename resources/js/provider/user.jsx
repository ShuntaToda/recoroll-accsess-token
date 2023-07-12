import { createContext, useState } from "react";

export const userContext = createContext({});
export const setUserContext = createContext(() => undefined);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    return (
        <userContext.Provider value={user}>
            <setUserContext.Provider value={setUser}>
                {children}
            </setUserContext.Provider>
        </userContext.Provider>
    );
};
