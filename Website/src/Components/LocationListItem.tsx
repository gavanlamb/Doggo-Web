import React, {useContext} from 'react';
import {
    ListItem,
    ListItemText,
    Typography,
    Divider,
} from "@material-ui/core";
import {SelectedLocationContext} from "../Contexts/SelectedLocationContextProvider";
import {Location} from "../Typings/Location";

export interface LocationListItemProps {
    location: Location
}

const LocationListItem: React.FC<LocationListItemProps> = ({location}) => {
    const [selectedLocation, setSelectedLocation] = useContext(SelectedLocationContext);
    return <>
        <ListItem
            key={location._id}
            alignItems="flex-start"
            onClick={() => setSelectedLocation(location)}
            style={{'backgroundColor': `${location._id === selectedLocation?._id ? '#F2F2F2' : 'inherit'}`}}>
            <ListItemText
                primary={location.Title}
                secondary={
                    <React.Fragment>
                        <Typography
                            noWrap
                            variant='subtitle2'>
                            {location.Location.address.split(',').slice(1,2)}
                        </Typography>
                        <Typography
                            noWrap
                            variant='caption'>
                            {
                                location.Types.map(t => t.Title).join(' · ') +
                                ' · ' +
                                location.Activities.map(t => t.Title).join(', ')
                            }
                        </Typography>
                        {
                            location.PhoneNumber ?
                                <Typography
                                    noWrap>
                                    {location.PhoneNumber}
                                </Typography> :
                                <> </>
                        }
                    </React.Fragment>
                } />
        </ListItem>
        <Divider />
    </>
};

export default LocationListItem;
