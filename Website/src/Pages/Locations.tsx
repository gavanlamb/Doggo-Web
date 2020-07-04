import React from 'react';
import Map from "../Components/Map";
import LocationListDrawer from '../Components/LocationListDrawer'
import useLocations from "../Clients/FetchLocations";
import {usePosition} from "../Hooks/usePosition";

const Locations = () => {
    const [coordinates, error] = usePosition();

    if(coordinates){
        const [isLoadingLocations, locations] = useLocations();
        if (!isLoadingLocations) {
            return(
                <>
                    <LocationListDrawer locations={locations}/>
                    <Map coordinates={coordinates} locations={locations}/>
                </>
            )
        }
    }

    return <div>Loading...</div>;
};

export default Locations
