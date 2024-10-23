import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {
    createAdd,
    fetchBedroom,
    fetchBuilding,
    fetchFloor,
    fetchHeating,
    fetchRepair,
    fetchRoom,
    fetchParking,
    fetchArea
} from "../../http/addApi";
import {observer} from "mobx-react-lite";

const CreateAdd = observer(({show, onHide}) => {
    const {add} = useContext(Context)

    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [square, setSquare] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchBuilding().then(data => add.setBuildings(data))
        fetchBedroom().then(data => add.setBedrooms(data))
        fetchFloor().then(data => add.setFloors(data))
        fetchRoom().then(data => add.setRooms(data))
        fetchRepair().then(data => add.setRepairs(data))
        fetchHeating().then(data => add.setHeatings(data))
        fetchParking().then(data => add.setParkings(data))
        fetchArea().then(data => add.setAreas(data))
    }, [add])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files)
    }

    const addDevice = () => {
        const formData = new FormData()
        Array.from(file).forEach(file1 => {
            formData.append('img', file1);
        })
        formData.append('title', title)
        formData.append('phone', phone)
        formData.append('address', address)
        formData.append('latitude', latitude)
        formData.append('longitude', longitude)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('square', square)
        formData.append('isPublic', 'yes')
        formData.append('userId', userId)
        formData.append('bedroomId', add.selectedBuilding.id)
        formData.append('buildingId', add.selectedBedroom.id)
        formData.append('floorId', add.selectedFloor.id)
        formData.append('roomId', add.selectedRoom.id)
        formData.append('repairId', add.selectedRepair.id)
        formData.append('heatingId', add.selectedHeating.id)
        formData.append('parkingId', add.selectedParking.id)
        formData.append('areaId', add.selectedArea.id)
        formData.append('info', JSON.stringify(info))
        createAdd(formData).then(data => onHide())
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название объявления"
                    />
                    <Form.Control
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="mt-3"
                        placeholder="Введите телефон"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="mt-3"
                        placeholder="Введите цену"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        multiple={true}
                        onChange={selectFile}
                    />
                    <Form.Control
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="mt-3"
                        placeholder="Введите адрес"
                    />
                    <Form.Control
                        value={square}
                        onChange={e => setSquare(e.target.value)}
                        className="mt-3"
                        placeholder="Введите площадь"
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание"
                    />

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedFloor.value || "Выберите этаж"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.floors.map(floor =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedFloor(floor)}
                                    key={floor.id}
                                >
                                    {floor.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedBuilding.value || "Выберите тип здания"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.buildings.map(building =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedBuilding(building)}
                                    key={building.id}
                                >
                                    {building.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedRoom.value || "Выберите количество комнат"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.rooms.map(room =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedRoom(room)}
                                    key={room.id}
                                >
                                    {room.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedBedroom.value || "Выберите количество спальных мест"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.bedrooms.map(bedroom =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedBedroom(bedroom)}
                                    key={bedroom.id}
                                >
                                    {bedroom.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedRepair.value || "Выберите тип ремонта"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.repairs.map(repair =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedRepair(repair)}
                                    key={repair.id}
                                >
                                    {repair.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedHeating.value || "Выберите тип отопления"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.heatings.map(heating =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedHeating(heating)}
                                    key={heating.id}
                                >
                                    {heating.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedParking.value || "Выберите тип парковки"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.parkings.map(parking =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedParking(parking)}
                                    key={parking.id}
                                >
                                    {parking.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{add.selectedArea.value || "Выберите регион города"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {add.areas.map(area =>
                                <Dropdown.Item
                                    onClick={() => add.setSelectedArea(area)}
                                    key={area.id}
                                >
                                    {area.value}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <div>
                        <Form.Control
                            value={userId}
                            onChange={e => setUserId(e.target.value)}
                            className="mt-3"
                            placeholder="Введите id владельца"
                        />
                        <Form.Control
                            value={latitude}
                            onChange={e => setLatitude(e.target.value)}
                            className="mt-3"
                            placeholder="Введите широту"
                        />
                        <Form.Control
                            value={longitude}
                            onChange={e => setLongitude(e.target.value)}
                            className="mt-3"
                            placeholder="Введите долготу"
                        />
                    </div>

                    <hr/>
                    <div>
                        <Button
                            variant={"outline-dark"}
                            onClick={addInfo}
                        >
                            Добавить новое свойство
                        </Button>
                        {info.map(i =>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder="Введите название свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder="Введите описание свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        variant={"outline-danger"}
                                        onClick={() => removeInfo(i.number)}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateAdd;