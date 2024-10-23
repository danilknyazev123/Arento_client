import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateAdd from "../components/modals/CreateAdd";
import CreateBedroom from "../components/modals/CreateBedroom";
import CreateBuilding from "../components/modals/CreateBuilding";
import CreateFloor from "../components/modals/CreateFloor";
import CreateRoom from "../components/modals/CreateRoom";
import CreateRepair from "../components/modals/CreateRepair";
import CreateHeating from "../components/modals/CreateHeating";
import CreateArea from "../components/modals/CreateArea";
import CreateParking from "../components/modals/CreateParking";
import CreateBlog from "../components/modals/CreateBlog";
import CreatePlace from "../components/modals/CreatePlace";
import UpdateAdd from "../components/modals/UpdateAdd";
import {ADD_CHECKED_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Redirect, useHistory} from "react-router-dom";
import {Context} from "../index";

const Admin = () => {
    const history = useHistory()
    const {user} = useContext(Context)

    const [buildingVisible, setBuildingVisible] = useState(false)
    const [bedroomVisible, setBedroomVisible] = useState(false)
    const [floorVisible, setFloorVisible] = useState(false)
    const [roomVisible, setRoomVisible] = useState(false)
    const [repairVisible, setRepairVisible] = useState(false)
    const [heatingVisible, setHeatingVisible] = useState(false)
    const [areaVisible, setAreaVisible] = useState(false)
    const [parkingVisible, setParkingVisible] = useState(false)
    const [addVisible, setAddVisible] = useState(false)
    const [blogVisible, setBlogVisible] = useState(false)
    const [placeVisible, setPlaceVisible] = useState(false)
    const [updateVisible, setUpdateVisible] = useState(false)

    if(user.UserData.role !== "ADMIN"){
        return(
            <Redirect to={SHOP_ROUTE}></Redirect>
        )
    } else {
        return (
            <Container className="d-flex flex-column">

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setBedroomVisible(true)}
                >
                    Добавить bedrooms
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setBuildingVisible(true)}
                >
                    Добавить buildings
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setFloorVisible(true)}
                >
                    Добавить floor
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setRoomVisible(true)}
                >
                    Добавить room
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setRepairVisible(true)}
                >
                    Добавить repair
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setHeatingVisible(true)}
                >
                    Добавить heating
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setParkingVisible(true)}
                >
                    Добавить parking
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setAreaVisible(true)}
                >
                    Добавить area
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setAddVisible(true)}
                >
                    Добавить add
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setBlogVisible(true)}
                >
                    Добавить blog
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setPlaceVisible(true)}
                >
                    Добавить Place
                </Button>

                <Button
                    className="mt-4"
                    variant={"outline-dark"}
                    onClick={() => setUpdateVisible(true)}
                >
                    Обновить(переопубликовать, продвинуть) объявление
                </Button>

                <Button
                    onClick={() => history.push(ADD_CHECKED_ROUTE)}
                    className="mt-4"
                    variant={"outline-dark"}
                >
                    Опубликовать оплаченные объявления
                </Button>

                <CreateAdd show={addVisible} onHide={() =>setAddVisible(false)}/>
                <CreateBedroom show={bedroomVisible} onHide={() =>setBedroomVisible(false)}/>
                <CreateBuilding show={buildingVisible} onHide={() =>setBuildingVisible(false)}/>
                <CreateFloor show={floorVisible} onHide={() =>setFloorVisible(false)}/>
                <CreateRoom show={roomVisible} onHide={() =>setRoomVisible(false)}/>
                <CreateRepair show={repairVisible} onHide={() =>setRepairVisible(false)}/>
                <CreateHeating show={heatingVisible} onHide={() =>setHeatingVisible(false)}/>
                <CreateParking show={parkingVisible} onHide={() =>setParkingVisible(false)}/>
                <CreateArea show={areaVisible} onHide={() =>setAreaVisible(false)}/>
                <CreateBlog show={blogVisible} onHide={() => setBlogVisible(false)}/>
                <CreatePlace show={placeVisible} onHide={() => setPlaceVisible(false)}/>
                <UpdateAdd show={updateVisible} onHide={() => setUpdateVisible(false)}/>
            </Container>
        );
    }

};

export default Admin;