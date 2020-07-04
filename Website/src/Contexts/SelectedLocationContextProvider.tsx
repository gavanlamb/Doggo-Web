import React, { createContext, useState } from "react";
import { Location } from "../Typings/Location";

export interface SelectedLocationContextProviderProps {
    children:any
}

const SelectedLocationContext = createContext<[Location | undefined, (location: Location) => void]>([undefined, x => {}]);

const SelectedLocationContextProvider: React.FC<SelectedLocationContextProviderProps> = ({ children }) =>  {
    const [location, setLocation] = useState<Location | undefined>(undefined);

    return <SelectedLocationContext.Provider value={[location, setLocation]}>
        {children}
    </SelectedLocationContext.Provider>
};

export { SelectedLocationContext, SelectedLocationContextProvider };
