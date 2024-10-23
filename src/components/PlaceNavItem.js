import React from 'react';
import {observer} from "mobx-react-lite";
import {PLACES_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const PlaceNavItem = observer(({place}) => {
    const history = useHistory()
    return (
        <li>
            <a onClick={() => history.push(PLACES_ROUTE + '/' + place.id)}>{place.title}</a>
        </li>
    );
});

export default PlaceNavItem;