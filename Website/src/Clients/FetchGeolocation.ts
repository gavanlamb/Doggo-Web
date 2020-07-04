import { useState, useEffect } from "react";
import {Geolocation} from "../Typings/Geolocation";

export default function getGeolocationFromIP(): [boolean, Geolocation | null] {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [location, setLocations] = useState<Geolocation | null>(null);

    useEffect(() => {
        fetch(
            'http://ip-api.com/json',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(l => {
                setLocations(l);
                setLoading(false);
            });
    }, []);

    return [isLoading, location];
}
