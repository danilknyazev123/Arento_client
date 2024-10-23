import React, {useContext, useEffect} from 'react';
import {fetchAllPlaces} from "../http/placesApi";
import {Context} from "../index";
import PlaceItem from "../components/PlaceItem";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";

const Places = observer(() => {
    const {add} = useContext(Context)

    useEffect(() => {
        fetchAllPlaces().then(data => {
            add.setPlaces(data.rows)
        })
    }, [add]);

    return (
        <Container>
            <section>
                {add.places.map(place =>
                    <PlaceItem key={place.id} place={place}/>
                )}
            </section>
        </Container>
    );
});

export default Places;