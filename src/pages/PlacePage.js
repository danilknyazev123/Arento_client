import React, {Suspense, useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {fetchAllPlaces} from "../http/placesApi";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/consts";
import {Redirect} from "react-router-dom";
import {lazy} from 'react';
import Loading from "../components/helpers/Loading";
import {Container} from "react-bootstrap";

const PlaceItem = lazy(() => import('../components/PlaceItem'));
const PlaceMainItem = lazy(() => import('../components/PlaceMainItem'))

const PlacePage = observer(() => {
    const {add} = useContext(Context)

    let location = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchAllPlaces().then(data => {
                    add.setPlaces(data.rows)
                })
            } catch (e) {
                alert("Ошибка при загрузке данных");
            }
        };
        fetchData().then()
    }, [add]);

    if(location.id === "history"){
        return (
            <Container>
                <section>
                    {add.places.slice(0, 1).map(place =>
                        <Suspense fallback={<Loading />}>
                            <PlaceItem key={place.id} place={place}/>
                        </Suspense>
                    )}
                </section>
            </Container>
        );
    } else if(location.id === "natural"){
        return (
            <Container>
                <section>
                    {add.places.slice(1, 6).map(place =>
                        <Suspense fallback={<Loading />}>
                            <PlaceItem key={place.id} place={place}/>
                        </Suspense>
                    )}
                </section>
            </Container>
        )
    } else if(location.id === "architecture"){
        return (
            <Container>
                <section>
                    {add.places.slice(6, 19).map(place =>
                        <Suspense fallback={<Loading />}>
                            <PlaceItem key={place.id} place={place}/>
                        </Suspense>
                    )}
                </section>
            </Container>
        )
    } else if(location.id === "leisure"){
        return (
            <Container>
                <section>
                    {add.places.slice(19, 33).map(place =>
                        <Suspense fallback={<Loading />}>
                            <PlaceItem key={place.id} place={place}/>
                        </Suspense>
                    )}
                </section>
            </Container>
        )
    } else if (location.id > 0 && location.id < 33) {
        return (
            <Container>
                <section>
                    {add.places.slice((Number(location.id) - 1), Number(location.id)).map(place =>
                        <Suspense fallback={<Loading />}>
                           <PlaceMainItem key={place.id} place={place}/>
                        </Suspense>
                    )}
                </section>
            </Container>
        )
    } else {
        return (
            <Redirect to={SHOP_ROUTE}/>
        )
    }
});

export default PlacePage;