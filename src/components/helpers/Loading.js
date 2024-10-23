import {Spinner} from "react-bootstrap";
import React from "react";

export default function Loading(){
    return (
        <div className="Spinner">
            <Spinner animation={"border"}/>
        </div>
    )
}