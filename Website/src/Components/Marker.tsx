import React, {useContext} from 'react';
import {Coords} from "google-map-react";
import {SelectedLocationContext} from "../Contexts/SelectedLocationContextProvider";
import {Location} from "../Typings/Location";

export interface MarkerProps extends Coords {
    id: string,
    colour: string,
    name: string,
    location:Location
}

const Marker: React.FC<MarkerProps> = ({id, name, colour, location}) => {
    const [_, setSelectedLocation] = useContext(SelectedLocationContext);
    return (
        <div className="marker"
             key={id}
             style={{
                 backgroundColor: colour,
                 borderColor: 'black',
                 borderStyle: 'solid',
                 borderWidth: '1px',
                 borderRadius: '100%',
                 top: '-10px',
                 left: '-10px',
                 height:'20px',
                 width:'20px',
                 position: 'absolute',
                 cursor: 'pointer'
             }}
             title={name}
             onClick={() => setSelectedLocation(location)}
        />
    );
};

export default Marker
