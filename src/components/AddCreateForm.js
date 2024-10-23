import React, {useContext, useEffect, useState} from 'react';
import {Button, CloseButton, Container, Dropdown, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Form from 'react-bootstrap/Form';
import info from '../Assets/info.svg'
import {PROFILE_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {Context} from "../index";
import Compressor from "compressorjs";
import {
    createAdd,
    fetchBedroom,
    fetchBuilding,
    fetchFloor,
    fetchHeating,
    fetchParking,
    fetchRepair,
    fetchRoom
} from "../http/addApi";
import CompressForm from "./modals/CompressForm";
import {IMaskInput} from "react-imask";


const AddCreateForm = observer(() => {
    const history = useHistory()

    const [drag, setDrag] = useState(false)
    const [files, setFiles] = useState([])

    const [compressFormVisible, setCompressFormVisible] = useState(false)

    let formData = new FormData()

    const {user} = useContext(Context)
    const {add} = useContext(Context)

    const PhoneMask = "+{7} (000) 000-00-00";

    useEffect(() => {
        fetchBuilding().then(data => add.setBuildings(data))
        fetchBedroom().then(data => add.setBedrooms(data))
        fetchFloor().then(data => add.setFloors(data))
        fetchRoom().then(data => add.setRooms(data))
        fetchRepair().then(data => add.setRepairs(data))
        fetchHeating().then(data => add.setHeatings(data))
        fetchParking().then(data => add.setParkings(data))
    }, [])

    let [text, setText] = useState('Выполняется обработка изображений. Время обработки может занимать до 20 секунд. Пожалуйста, подождите...')

    const renderTooltipBuilding = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            1. Новостройка - от 2010 года<br/>
            2. Старый фонд - до 1950 года<br/>
            3. Иное
        </Tooltip>
    );
    const handleClick = () => {
        document.getElementById('input_photo_upload').click()
    }

    const getImages = () => {
        if(files && files.length){
            let title = document.getElementById("add-create-title").value
            let phone = document.getElementById("add-create-phone").value
            let address = document.getElementById("add-create-address").value
            let description = document.getElementById("add-create-description").value
            let price = document.getElementById("add-create-price").value
            let square = document.getElementById("add-create-square").value
            let link = document.getElementById("add-create-link").value
            let checkedValues = [...document.querySelectorAll('input[type="checkbox"]')]
                .map(checkbox => {
                    if(checkbox.checked){
                        return checkbox.value
                    } else {
                        return ''
                    }
                });
            if(checkedValues) {
                for (let i = 0; i <= 2; i++) {
                    if (checkedValues[i]) {
                        add.selectedInfo.id = add.selectedInfo.id + checkedValues[i]
                    }
                }
            }
            if(title){formData.append('title', title)
                if(phone){formData.append('phone', phone)
                    if(address){formData.append('address', address)
                        if(description){formData.append('description', description)
                            if(price){formData.append('price', price)
                                if(square){formData.append('square', square)
                                    if(user.UserData.id){formData.append('userId', user.UserData.id)
                                        if(add.selectedBuilding.id){formData.append('buildingId', add.selectedBuilding.id)
                                            if(add.selectedBedroom.id){formData.append('bedroomId', add.selectedBedroom.id)
                                                if(add.selectedFloor.id){formData.append('floorId', add.selectedFloor.id)
                                                    if(add.selectedRoom.id){formData.append('roomId', add.selectedRoom.id)
                                                        if(add.selectedRepair.id){formData.append('repairId', add.selectedRepair.id)
                                                            if(add.selectedHeating.id){formData.append('heatingId', add.selectedHeating.id)
                                                                if(add.selectedParking.id){formData.append('parkingId', add.selectedParking.id)
                                                                    if(link){formData.append('link', link)
                                                                        let checkedValues = [...document.querySelectorAll('input[type="checkbox"]')]
                                                                            .map(checkbox => {
                                                                                if(checkbox.checked){
                                                                                    return checkbox.value
                                                                                } else {
                                                                                    return ''
                                                                                }
                                                                            });
                                                                        if(checkedValues[0] === 'on'){
                                                                            add.selectedAnimal.id = 1
                                                                        }
                                                                        if(checkedValues[1] === 'on'){
                                                                            add.selectedChildren.id = 1
                                                                        }
                                                                        if(checkedValues[2] === 'on'){
                                                                            add.selectedSmoking.id = 1
                                                                        }
                                                                        if(add.selectedAnimal.id || add.selectedChildren.id || add.selectedSmoking.id) {
                                                                            if (add.selectedAnimal.id) {
                                                                                formData.append('animal', add.selectedAnimal.id)
                                                                            }
                                                                            if (add.selectedChildren.id) {
                                                                                formData.append('children', add.selectedChildren.id)
                                                                            }
                                                                            if (add.selectedSmoking.id) {
                                                                                formData.append('smoking', add.selectedSmoking.id)
                                                                            }
                                                                            if (user.UserData) {
                                                                                formData.append('email', user.UserData.email)
                                                                                formData.append('activationLink', user.UserData.activationLink)
                                                                                for (let i = 0; i < files.length; i++) {
                                                                                    let file1 = files[i]
                                                                                    new Compressor(file1, {
                                                                                        quality: 0.7,
                                                                                        maxHeight: 800,
                                                                                        maxWidth: 1200,
                                                                                        mimeType: "image/jpeg",
                                                                                        // The compression process is asynchronous,
                                                                                        // which means you have to access the `result` in the `success` hook function.
                                                                                        success(result) {
                                                                                            file1 = new File([result], `${result.name}`)
                                                                                            formData.append('img', file1);
                                                                                        },
                                                                                        error(err) {
                                                                                            console.log(err.message);
                                                                                        },
                                                                                    })}
                                                                                setCompressFormVisible(true)
                                                                                setTimeout(() =>
                                                                                    createAdd(formData).then(data => setText('Объявление успешно размещено!'))
                                                                                    , 20000)
                                                                            }
                                                                        } else {alert('Выберите хотя бы одно правило заселения')}
                                                                    } else {alert('Введите ссылку на диск с видео')}
                                                                } else {alert('Выберите тип парковки')}
                                                            } else {alert('Выберите тип отопления')}
                                                        } else {alert('Выберите тип ремонта')}
                                                    } else {alert('Выберите количество комнат')}
                                                } else {alert('Выберите этаж')}
                                            } else {alert('Выберите тип здания')}
                                        } else {alert('Выберите количество спальных мест')}
                                    } else {alert('Вы не авторизованы. Критическая ошибка. Выйдите из профиля и зайдите снова чтобы ее устранить')}
                                } else {alert('Введите площадь')}
                            } else {alert('Введите цену')}
                        } else {alert('Заполните описание')}
                    } else {alert('Заполните адрес объекта')}
                } else {alert('Заполните телефон для связи')}
            } else {alert('Заполните название объявления')}
        } else {
            alert('Загрузите изображения!')
        }
    }

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }

    const onDropHandler = (e) => {
        e.preventDefault()
        setFiles([...e.dataTransfer.files])

        setDrag(false)
    }

    /*

    * */

    return (
        <Container>
            <h1>Новое объявление</h1>
            <div>
                <h4>
                    Введите название объявления
                </h4>
                <Form.Control
                    id="add-create-title"
                    className="mt-2"
                    maxlength="25"
                    placeholder="Введите название объявления"
                />
                <div className="mb-2 title_alert">Обратите внимание, что количество символов ограничено до 25</div>
            </div>
            <div>
                <h4>Телефон для связи</h4>
                <div className="form-group mb-2">
                    <IMaskInput
                        id="add-create-phone"
                        mask={PhoneMask}
                        value=""
                        placeholder="+7 (999) 999 99 99"
                        className="form-control"
                    />
                </div>
            </div>
            <div>
                <h4>Цена за сутки, ₽</h4>
                <Form.Control
                    id="add-create-price"
                    className="mb-2"
                    placeholder="Введите цену"
                    type="number"
                />
            </div>
            <h2>Общая информация</h2>
            <h4>Фотографии</h4>
            <div>
                <input
                    name="fileInput"
                    type="file"
                    id="input_photo_upload"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                        setFiles(Array.from(e.target.files || []));
                    }}
                    hidden={true}
                />
                {
                    !files[0] ?
                        <div
                            className="IMAGE_DROP_BUTTON_DRAG_TRUE"
                            onClick={handleClick}
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}
                            onDrop={e => onDropHandler(e)}
                        >
                            {
                                drag ?
                                    <div>
                                        Отпустите для загрузки
                                    </div>
                                    :
                                    <div>
                                        Перетащите или выберите файлы для загрузки
                                    </div>
                            }
                        </div>
                        :
                        <div
                            className="IMAGE_DROP_BUTTON_DRAG_FALSE"
                            onClick={handleClick}
                        >
                            <div>
                                Выбрать файлы
                            </div>
                        </div>
                }
                <div className="preview">
                    {files.map((file) => (
                        <div
                            key={file.name}
                            className="preview_photo"
                        >
                            <button
                                className="destroy_button"
                                onClick={() => {
                                    setFiles(
                                        files.filter(
                                            (a) =>
                                                a.name !==
                                                file.name
                                        )
                                    );
                                }}
                            >
                                <CloseButton/>
                            </button>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="mt-3">Адрес объекта</h4>
                <Form.Control
                    id="add-create-address"
                    className="mb-2"
                    placeholder="Например: ул. Кирова 1, квартира 1"
                />
            </div>
            <div>
                <h4>Общая площадь квартиры, м<sup>2</sup></h4>
                <Form.Control
                    id="add-create-square"
                    className="mb-2"
                    placeholder="Введите площадь"
                    type="number"
                />
            </div>
            <div>
                <h4>Этаж</h4>
                <Dropdown className="mb-2">
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
            </div>
            <div>
                <div className="d-flex flex-row align-items-center">
                    <h4>Тип здания</h4>
                    <OverlayTrigger
                        placement="right"
                        delay={{show: 150, hide: 100}}
                        overlay={renderTooltipBuilding}
                    >
                        <div>
                            <Image
                                className="mb-1 ml-1"
                                src={info}
                                width={23}
                                height={23}
                            />
                        </div>
                    </OverlayTrigger>
                </div>
                <Dropdown className="mb-2">
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
            </div>
            <div>
                <h4>Количество комнат</h4>
                <Dropdown className="mb-2">
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
            </div>
            <div>
                <h4>Количество спальных мест</h4>
                <Dropdown className="mb-2">
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
            </div>
            <div>
                <div>
                    <h4>Ремонт</h4>
                </div>
                <Dropdown className="mb-2">
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
            </div>
            <div>
                <div>
                    <h4>Отопление</h4>
                </div>
                <Dropdown className="mb-2">
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
            </div>
            <div>
                <div>
                    <h4>Парковка</h4>
                </div>
                <Dropdown className="mb-2">
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
            </div>
            <div>
                <div>
                    <h4>Описание</h4>
                    <Form.Control
                        id="add-create-description"
                        className="mt-2 mb-2"
                        placeholder="Введите описание"
                    />
                    <h4>Ссылка на диск с видео квартиры для проверки объявления</h4>
                    <Form.Control
                        id="add-create-link"
                        placeholder="Введите ссылку"
                    />
                    <div className="title_alert mb-2">Обратите внимание, что объявление не будет опубликовано, если оно не соответствует правилам или
                        если ссылка недействительна</div>
                </div>
                <h4>Правила</h4>
                {['checkbox'].map((type) => (
                    <div
                        key={`inline-${type}`}
                        className="mb-3 pointer-event">
                        <Form.Check
                            inline
                            label="Можно с животными"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Можно с детьми"
                            name="group2"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Можно курить"
                            name="group3"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                    </div>
                ))}
                <div className="d-flex justify-content-end">
                    <div className="m-2">
                        <Button
                            className="p-2"
                            onClick={() => history.push(PROFILE_ROUTE + '/' + user.UserData.id)}
                        >
                            Назад
                        </Button>
                    </div>
                    <div className="m-2">
                        <Button
                            className="p-2"
                            onClick={getImages}
                        >
                            Разместить
                        </Button>
                    </div>
                </div>
            </div>
            <CompressForm show={compressFormVisible} text={text} onHide={() => setCompressFormVisible(false)}/>
        </Container>
    );
});

export default AddCreateForm;