import React, {Suspense, useContext, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {lazy} from 'react';
import Loading from "./helpers/Loading";

const AddItem = lazy(() => import('../components/AddItem'));

const AddList = observer(() => {
    const {add} = useContext(Context)

    const windowWidth = useRef(window.innerWidth)
    return (
        <Row className={windowWidth < 767 ? "d-flex pl-2" : "d-flex"}>
            {add.adds.map(add =>
                <Suspense key={add.id} fallback={<Loading />}>
                    <AddItem key={add.id} add={add}/>
                </Suspense>
            )}
        </Row>
    );
});

export default AddList;