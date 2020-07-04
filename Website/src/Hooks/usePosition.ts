import {useState, useEffect} from 'react';
import getGeolocationFromIP from "../Clients/FetchGeolocation";
import {Coordinates} from "../Typings/Geolocation";

export default function usePosition ():[Coordinates | null, string | null] {
    const [position, setPosition] = useState<Coordinates | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onChange:PositionCallback = (position:Position) => {
        setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    };

    const onError:PositionErrorCallback = (error:PositionError) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            const [isLoading, geolocation] = getGeolocationFromIP();
            if(!isLoading && geolocation !== null){
                setPosition({
                    latitude: geolocation.lat,
                    longitude: geolocation.lon
                })
                return;
            }
        }

        const watcher = geo.watchPosition(onChange, onError);
        return () => geo.clearWatch(watcher);
    }, []);

    return [position, error];
}char
