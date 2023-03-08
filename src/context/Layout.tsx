import { createContext } from "react";
import { PropsWithChildren } from "react";
import { useContext, useState } from "react";

const DashboardContext = createContext<any>(null);

type valueType = {
    active_button: boolean[],
    setActive_button: (el: boolean[]) => void,
}

export const DashboardProvider = ({ children }: PropsWithChildren) => {
    const [active_button, setActive_button] = useState<boolean[]>( new Array(5).fill(false) );
    const value: valueType = { active_button, setActive_button };
    return (
        <DashboardContext.Provider value={value}>
            { children }
        </DashboardContext.Provider>
    )
}

export const useDashboard = () => useContext(DashboardContext);