import React from 'react';
import {List, SwipeableDrawer} from "@material-ui/core";
import LocationListItem, {LocationListItemProps} from "./LocationListItem";
import {Location} from "../Typings/Location";

export interface LocationListDrawerProps {
    locations:Location[]
}

const LocationListDrawer: React.FC<LocationListDrawerProps> = ({locations}) => {

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return <SwipeableDrawer
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        variant="persistent"
    >
        <List
            style={{ width: '400px'}}>
            {
                locations.map(location =>
                    <LocationListItem
                        location={location}
                    />
                )
            }
        </List>
    </SwipeableDrawer>
};

export default LocationListDrawer;
