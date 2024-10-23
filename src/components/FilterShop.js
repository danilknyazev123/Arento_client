import React from 'react';
import PriceBar from "./PriceBar";
import AreaBar from "./AreaBar";
import SquareBar from "./SquareBar";
import FloorBar from "./FloorBar";
import BuildingBar from "./BuildingBar";
import RoomBar from "./RoomBar";
import BedroomBar from "./BedroomBar";
import RepairBar from "./RepairBar";
import HeatingBar from "./HeatingBar";
import ParkingBar from "./ParkingBar";
import RuleBar from "./RuleBar";
import {Container} from "react-bootstrap";
import cancel from "../Assets/cancel.svg";

const FilterShop = ({active, setActive}) => {
    return (
        <>
            <div
                className={active ? "filter_mobile active" : "filter_mobile"}
            >
                <Container>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <h3 className="d-flex justify-content-center">
                            Фильтры
                        </h3>
                        <div className="d-flex " onClick={() => setActive(false)}>
                            <img id="cancel-svg-filter" src={cancel} alt="Закрыть фильтры"/>
                        </div>
                    </div>
                    <PriceBar/>
                    <AreaBar/>
                    <SquareBar/>
                    <FloorBar/>
                    <BuildingBar/>
                    <RoomBar/>
                    <BedroomBar/>
                    <RepairBar/>
                    <HeatingBar/>
                    <ParkingBar/>
                    <RuleBar/>
                </Container>
                <div
                    onClick={() => setActive(false)}
                    className="filter_mobile_blur"
                ></div>
            </div>

        </>
    );
    }
;

export default FilterShop;