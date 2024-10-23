import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import BuildingBar from "../components/BuildingBar";
import BedroomBar from "../components/BedroomBar";
import FloorBar from "../components/FloorBar";
import RoomBar from "../components/RoomBar";
import RepairBar from "../components/RepairBar";
import HeatingBar from "../components/HeatingBar";
import AddList from "../components/AddList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAdd} from "../http/addApi";
import PriceBar from "../components/PriceBar";
import Pages from "../components/Pages";
import AreaBar from "../components/AreaBar";
import SquareBar from "../components/SquareBar";
import ParkingBar from "../components/ParkingBar";
import RuleBar from "../components/RuleBar";
import Loading from "../components/helpers/Loading";
import FilterShop from "../components/FilterShop";
import SelectionOffer from "../components/modals/SelectionOffer";

const Shop = observer(() => {
    const {add} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [filterActive, setFilterActive] = useState(false);
    const [selectionOfferActive, setSelectionOfferActive] = useState(false)
    const [isVisited, setIsVisited] = useState(false);

    let data = {}
    let checkedValues;

    const windowWidth = useRef(window.innerWidth)

    useEffect(() => {
        fetchAdd(add.selectedMinPrice, add.selectedMaxPrice, add.selectedMinSquare, add.selectedMaxSquare, add.selectedMinFloorId, add.selectedMaxFloorId,
            add.selectedMinRoomId, add.selectedMaxRoomId, add.selectedMinBedroomId, add.selectedMaxBedroomId, add.selectedBuilding.id, add.selectedRepair.id,
            add.selectedHeating.id, add.selectedArea.id, add.selectedParking.id, add.selectedAnimal.id, add.selectedChildren.id, add.selectedSmoking.id,
            add.page, add.limit).then(data => {
            add.setAdds(data.rows)
            add.setTotalCount(data.count)
        }).finally(() => setLoading(false))
    }, [add, add.page]);

    const takeParamsOnFront = () => {
        setFilterActive(false)

        add.selectedArea.id = ''
        add.selectedBuilding.id = ''
        add.selectedRepair.id = ''
        add.selectedHeating.id = ''
        add.selectedParking.id = ''
        add.selectedAnimal.id = ''
        add.selectedChildren.id = ''
        add.selectedSmoking.id = ''

        data = [...document.querySelectorAll('input[type="number"]')].map(inputElement => inputElement.value)
        checkedValues = [...document.querySelectorAll('input[type="checkbox"]')]
            .map(checkbox => {
                if(checkbox.checked){
                    return checkbox.value
                } else {
                    return ''
                }
            });
        if(checkedValues){
            for(let i = 0; i <= 6; i++){
                if(checkedValues[i]){
                    add.selectedArea.id = add.selectedArea.id + checkedValues[i]
                }
            }
            for(let i = 7; i <= 9; i++){
                if(checkedValues[i]){
                    add.selectedBuilding.id = add.selectedBuilding.id + checkedValues[i]
                }
            }
            for(let i = 10; i <= 13; i++){
                if(checkedValues[i]){
                    add.selectedRepair.id = add.selectedRepair.id + checkedValues[i]
                }
            }
            for(let i = 14; i <= 16; i++){
                if(checkedValues[i]){
                    add.selectedHeating.id = add.selectedHeating.id + checkedValues[i]
                }
            }
            for(let i = 17; i <= 19; i++){
                if(checkedValues[i]){
                    add.selectedParking.id = add.selectedParking.id + checkedValues[i]
                }
            }
            if(checkedValues[20]){
                add.selectedAnimal.id = 1
            }
            if(checkedValues[21]){
                add.selectedChildren.id = 1
            }
            if(checkedValues[22]){
                add.selectedSmoking.id = 1
            }
        }

        if(data && checkedValues){
            add._selectedMinPrice = data[0]
            add._selectedMaxPrice = data[1]
            add._selectedMinSquare = data[2]
            add._selectedMaxSquare = data[3]
            add._selectedMinFloorId = data[4]
            add._selectedMaxFloorId = data[5]
            add._selectedMinRoomId = data[6]
            add._selectedMaxRoomId = data[7]
            add._selectedMinBedroomId = data[8]
            add._selectedMaxBedroomId = data[9]
            fetchAdd(add.selectedMinPrice, add.selectedMaxPrice, add.selectedMinSquare, add.selectedMaxSquare, add.selectedMinFloorId, add.selectedMaxFloorId,
                add.selectedMinRoomId, add.selectedMaxRoomId, add.selectedMinBedroomId, add.selectedMaxBedroomId, add.selectedBuilding.id, add.selectedRepair.id,
                add.selectedHeating.id, add.selectedArea.id, add.selectedParking.id, add.selectedAnimal.id, add.selectedChildren.id, add.selectedSmoking.id,
                add.page, add.limit
            ).then(data => {
                add.setAdds(data.rows)
                add.setTotalCount(data.count)
            })
        }
    }


    if(!isVisited){
        setTimeout(function () {
            setSelectionOfferActive(true)
            setIsVisited(true)
        }, 180000)
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col className={windowWidth.current > 767 ?
                    "m-0 d-flex flex-column align-items-center mb-5"
                    :
                    "m-0 d-flex flex-column align-items-center"
                } md={windowWidth.current > 767 ? 3 : 0}>
                    <div
                        className="filter_container"
                    >
                        {windowWidth.current > 767 ?
                            <>
                                <div className="filter_container_desktop">
                                    <div className="filter">
                                        <h3>Фильтры</h3>
                                    </div>
                                    <div className="isWidth">
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
                                        <div className="text-center">
                                            <Button
                                                onClick={takeParamsOnFront}
                                            >
                                                Показать
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div
                                    className="burgerFilterMobile"
                                    onClick={() => setFilterActive(!filterActive)}
                                >
                                    <div
                                        className="burgerFilter"
                                    >
                                        <h5>Фильтры</h5>
                                    </div>
                                    {filterActive ?
                                        <>
                                            <div className="text-center">
                                                <Button
                                                    id="jopa"
                                                    onClick={takeParamsOnFront}
                                                >
                                                    Показать
                                                </Button>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }
                                </div>
                            </>
                        }
                    </div>
                </Col>
                <Col
                    md={9}>
                    {!loading ?
                        <>
                            <AddList/>
                            <Pages/>
                        </>
                        :
                        <>
                            <Loading/>
                        </>
                    }
                </Col>
            </Row>
            <FilterShop active={filterActive} setActive={setFilterActive}/>
            <SelectionOffer show={selectionOfferActive} onHide={() => setSelectionOfferActive(false)}/>
        </Container>
    );
});

export default Shop;