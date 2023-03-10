import { createContext, PropsWithChildren, useContext, useState } from "react";

const AddUserContext = createContext<any>(null);

type value_type = {
    open: boolean,
    setOpen: (el: boolean) => void,
}

export const AddUserProvider = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState<boolean>(false);
    const value: value_type = {
        open,
        setOpen,
    }
    return (
        <AddUserContext.Provider value={value}>
            { children }
        </AddUserContext.Provider>
    )
}

export const useAddUser = () => useContext(AddUserContext);