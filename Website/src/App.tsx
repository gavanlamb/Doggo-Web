import React from 'react';
import {GeolocatedProps} from "react-geolocated";
import Places from "./Pages/Locations";
import {SelectedLocationContextProvider} from "./Contexts/SelectedLocationContextProvider";
import { LocationContextProvider } from './Contexts/LocationContextProvider';

console.log(process.env);
process.env.NODE_CONFIG_DIR = __dirname + '/Config/';

const App: React.FC<GeolocatedProps> = () => {
    return (
        <LocationContextProvider>
            <SelectedLocationContextProvider>
                <div style={{height:'100vh'}} >
                    <Places/>
                </div>
            </SelectedLocationContextProvider>
        </LocationContextProvider>
    );
};

export default App;