import React, {useContext} from 'react';
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import {Location} from "../Typings/Location";
import {Coordinates} from "../Typings/Geolocation";
import {SelectedLocationContext} from "../Contexts/SelectedLocationContextProvider";

export interface MapProps {
    coordinates: Coordinates
    locations: Location[]
}

const Map: React.FC<MapProps> = ({coordinates, locations}) => {
    const [selectedLocation, _] = useContext(SelectedLocationContext);
    const defaultZoom = 11;



    const getCentre = (location: Location | undefined) => {
        if(location?.Location){
            return {
                lat:location.Location.lat,
                lng:location.Location.lng
            }
        }

        return {
            lat:coordinates.latitude,
            lng:coordinates.longitude
        }
    }
    const getZoom = (location: Location | undefined):number => {
        if(location?.Location) {
            return 16;
        }
        return defaultZoom;
    }

    return(
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAa4nqhAdYMV4scJPWmFWP3QGEb8FICCOM' }}
            defaultCenter={getCentre(selectedLocation)}
            defaultZoom={11}
            center={getCentre(selectedLocation)}
            zoom={getZoom(selectedLocation)}>
            {
                locations.map((location) => {
                    return <Marker
                        id={location._id}
                        lat={location.Location.lat}
                        lng={location.Location.lng}
                        colour={location.Types[0].Colour}
                        name={location.Title}
                        location={location}
                    />
                })
            }
        </GoogleMapReact>
    )
};

export default Map
