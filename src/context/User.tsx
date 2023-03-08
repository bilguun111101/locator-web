import { createContext, PropsWithChildren } from "react";

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const value = {};
    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}