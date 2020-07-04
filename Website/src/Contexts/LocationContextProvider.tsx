import React, { createContext, useState } from "react";
import { Location } from "../Typings/Location";

export interface SelectedLocationContextProviderProps {
    children:any
}

const LocationContext = createContext<[Location | undefined, (location: Location) => void]>([undefined, x => {}]);

const LocationContextProvider: React.FC<SelectedLocationContextProviderProps> = ({ children }) =>  {
    const [location, setLocation] = useState<Location | undefined>(undefined);

    return <LocationContext.Provider value={[location, setLocation]}>
        {children}
    </LocationContext.Provider>
};

export { LocationContext, LocationContextProvider };
