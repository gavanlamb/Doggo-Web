import { useState, useEffect } from "react";
import {Location} from "../Typings/Location";

export default function useLocations(): [boolean, Location[]] {
    const [isLoading, setLoading] = useState(true);
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        fetch(
            "https://manage.doggo.haplo.com.au/api/collections/get/Location",
            {
                method: 'POST',
                body: JSON.stringify({
                    fields:{
                        _id:1,
                        Title:1,
                        Description:1,
                        PhoneNumber:1,
                        Types:1,
                        Activities:1,
                        Location:1
                    },
                    simple:1,
                    populate:1
                }),
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

    return [isLoading, locations];
}
