import React, {lazy, Suspense, useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {
    AddToStopList,
    fetchArea,
    fetchBedroom,
    fetchBuilding,
    fetchFloor,
    fetchHeating,
    fetchOneAdd,
    fetchOneUser,
    fetchParking,
    fetchRepair,
    fetchRoom,
    updateAdd
} from "../http/addApi";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {Button, Container, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import UserAddProfile from "../components/UserAddProfile";
import FormAuth from "../components/modals/FormAuth";
import FormSolution from "../components/modals/FormSolution"
import AddPageImages from "../components/AddPageImages";

import share from "../Assets/share.svg"
import FormAddToStopListSuccessfully from "../components/modals/FormAddToStopListSuccessfully";
import Loading from "../components/helpers/Loading";

const AddMap = lazy(() => import('../maps/AddMap'));

const AddPage = observer(() => {
    const [add1, setAdd1] = useState({info: []})
    const [user1, setUser1] = useState([])
    let [imageNames, setImageNames] = useState([]);
    const [formAuthVisible, setAuthVisible] = useState(false)
    const [formSolutionVisible, setSolutionVisible] = useState(false)
    const [formStopListVisible, setFormStopListVisible] = useState(false)
    const [loading, setLoading] = useState(true)

    const {user} = useContext(Context)
    const {add} = useContext(Context)
    const {id} = useParams()

    const link = window.location.href
    const windowWidth = useRef(window.innerWidth)

    const ShowPhone = async () => {
        const el = document.getElementById('ADD_PHOTO')
        el.innerText = add1.phone
        el.style.fontSize = "25px"
        el.style.backgroundColor = "#3A3A3A"
        await navigator.clipboard.writeText(add1.phone)
        alert('Телефон успешно скопирован в буфер обмена')
    }

    const StopAdd = async () => {
        const formData = new FormData()
        formData.append('id', id)
        await AddToStopList(formData).then(() => setFormStopListVisible(true))
    }

    const CopyLink = async () => {
        await navigator.clipboard.writeText(link)
        alert('Ссылка успешно скопирована в буфер обмена')
    }

    const containerStyles = {
        marginBottom: '30px'
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchBedroom().then(data => add.setBedrooms(data))
                fetchBuilding().then(data => add.setBuildings(data))
                fetchFloor().then(data => add.setFloors(data))
                fetchRoom().then(data => add.setRooms(data))
                fetchHeating().then(data => add.setHeatings(data))
                fetchRepair().then(data => add.setRepairs(data))
                fetchParking().then(data => add.setParkings(data))
                fetchArea().then(data => add.setAreas(data))
                const data = await fetchOneAdd(id);
                setAdd1(data);
                const response = await fetch(process.env.REACT_APP_API_URL + 'adds/user' + data.userId + '/' + id + '.txt');
                const text = await response.text();
                const imageNames = text.split('\n').filter(Boolean);
                setImageNames(imageNames);
                const userData = await fetchOneUser(data.userId)
                setUser1(userData)
            } catch (e) {
                console.error("Ошибка при загрузке данных:", e);
            }
        };
        fetchData().then().finally(() => setLoading(false));
    }, [id]);

    const update = () => {
        try {
            const formData = new FormData()
            formData.append('id', id)
            updateAdd(formData).then()
            alert('Успешно!')
        } catch (e) {
            console.error("Ошибка:", e);
        }
    }

    const handleSubmit = () => {
        try{
            window.open(`${add1.link}`, "_blank");
        } catch (e) {
            console.error("Ошибка:", e);
        }
    }

    if (loading) {
        return (
            <div className="Spinner">
                <Spinner animation={"border"}/>
            </div>
        )
    }

    return (
        <div>
            <Container>
                {add1.userId === user.UserData.id ?
                    <>
                        {add1.isPublic === "" ?
                            <>
                                <div className="message">
                                    <div className="message_text">
                                        Чтобы Ваше объявление показывалось в поиске, Вы должны оплатить его размещение
                                    </div>
                                    <Button
                                        id="button_pay_add"
                                        onClick={update}
                                    >
                                        Оплатить
                                    </Button>
                                </div>
                            </>
                            :
                            ((add1.isPublic === "yes" && Date.parse(add1.updatedAt) < (new Date() - 30 * 24 * 60 * 60 * 1000)) ?
                                    <>
                                        <div className="message">
                                            <div className="message_text">
                                                Чтобы Ваше объявление показывалось в поиске, Вы должны продлить размещение
                                            </div>
                                            <Button
                                                id="button_pay_add"
                                                onClick={update}
                                            >
                                                Оплатить
                                            </Button>
                                        </div>
                                    </>
                                    :
                                    (add1.isChecked === true ?
                                            <>
                                                <div className="message">
                                                    <div className="message_text">
                                                        Ваше объявление успешно размещено и пользователи видят его!
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            ((user.UserData.role !== "ADMIN") ?
                                                <>
                                                    <div className="message">
                                                        <div className="message_text">
                                                            Ваше объявление уже проверяется модератором!
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                            )
                                    )
                            )
                        }
                    </>
                    :
                    <></>
                }
                {
                    (user.UserData.role === "ADMIN" && !add1.isChecked && add1.isPublic ?
                            <>
                            <div className="message_admin">
                                    <div className="message_text_admin">
                                        Проверка объявления
                                    </div>
                                    <div className={windowWidth.current < 767 ? "d-flex" : ""}>
                                        <Button
                                            id="button_pay_add"
                                            onClick={handleSubmit}
                                        >
                                                Перейти в диск
                                        </Button>
                                        <Button
                                            id="button_pay_add"
                                            onClick={() => setSolutionVisible(true)}
                                            className="ml-2"
                                        >
                                            Решение
                                        </Button>
                                    </div>
                                </div>
                            </>
                            :
                            <></>
                    )
                }
                <div className="ADD_PAGE_MAIN">
                    <div className="ADD_PAGE_SEC">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="ADD_PAGE_TITLE">
                                <h1>{add1.title}, {add1.square} м<sup>2</sup></h1>
                            </div>
                            {windowWidth.current < 990 ?
                                <>
                                    <div>
                                        <img
                                            src={share}
                                            width={50}
                                            height={50}
                                            onClick={CopyLink}
                                            id="add_share_button"
                                            alt="Поделиться"
                                        />
                                    </div>
                                </>
                                :
                                <></>
                            }
                        </div>
                        <div className="ADD_PAGE_IMAGES" style={containerStyles}>
                            <AddPageImages add1={add1} imageNames={imageNames}/>
                        </div>
                        {windowWidth.current < 990 ?
                            <>
                                <div className="mt-2">
                                    <div>
                                        <div className="MAIN_TITLE">
                                            от {Math.floor(add1.price / 1000) ?
                                            Math.floor(add1.price / 1000) : <></>
                                        } {add1.price % 1000 === 0 ?
                                            '000' : add1.price % 1000
                                        }
                                            ₽ за сутки
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="profile_button"
                                            onClick={ShowPhone}
                                            id="ADD_PHOTO"
                                        >
                                            показать телефон
                                        </button>
                                    </div>
                                </div>
                            </>
                            :
                            <></>
                        }

                        <h3>О квартире</h3>
                        <div>
                            <ul className="ADD_PAGE_INFO">
                                <li>{add.areas.slice(add1.areaId - 1, add1.areaId).map(area =>
                                    <div
                                        key={area.id}
                                    >
                                        Район города: {area.value}
                                    </div>
                                )}
                                </li>
                                <li>Площадь: {add1.square} м<sup>2</sup></li>
                                <li>{add.floors.slice(add1.floorId - 1, add1.floorId).map(floor =>
                                    <div
                                        key={floor.id}
                                    >
                                        Этаж: {floor.value}
                                    </div>
                                )}
                                </li>
                                <li>{add.buildings.slice(add1.buildingId - 1, add1.buildingId).map(building =>
                                    <div
                                        key={building.id}
                                    >
                                        Тип здания: {building.value}
                                    </div>
                                )}
                                </li>
                                <li>{add.rooms.slice(add1.roomId - 1, add1.roomId).map(room =>
                                    <div
                                        key={room.id}
                                    >
                                        Количество комнат: {room.value}
                                    </div>
                                )}
                                </li>
                                <li>{add.bedrooms.slice(add1.bedroomId - 1, add1.bedroomId).map(bedroom =>
                                    <div
                                        key={bedroom.id}
                                    >
                                        Количество спальных мест: {bedroom.value}
                                    </div>
                                )}
                                </li>
                                <li>{add.repairs.slice(add1.repairId - 1, add1.repairId).map(repair =>
                                    <div
                                        key={repair.id}
                                    >
                                        Тип ремонта: {repair.value}
                                    </div>
                                )}
                                </li>
                                <li>{add.heatings.slice(add1.heatingId - 1, add1.heatingId).map(heating =>
                                    <div
                                        key={heating.id}
                                    >
                                        Тип отопления: {heating.value}
                                    </div>
                                )}
                                </li>
                                <li>{add.parkings.slice(add1.parkingId - 1, add1.parkingId).map(parking =>
                                    <div
                                        key={parking.id}
                                    >
                                        Тип парковки: {parking.value}
                                    </div>
                                )}
                                </li>
                            </ul>
                        </div>
                        <h3>Правила заселения</h3>
                        <div>
                            <ul className="ADD_PAGE_INFO">
                                <li>Можно с животными: {(add1.animal === 1 ?
                                        <>Да</> : <>Нет</>
                                )}</li>
                                <li>Можно с детьми: {(add1.children === 1 ?
                                        <>Да</> : <>Нет</>
                                )}</li>
                                <li>Можно курить: {(add1.smoking === 1 ?
                                        <>Да</> : <>Нет</>
                                )}</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Расположение квартиры</h3>
                            <div>г. Кисловодск, {add1.address}</div>
                            <Suspense key={add.id} fallback={<Loading />}>
                                <AddMap key={add1.id} add={add1}/>
                            </Suspense>
                        </div>
                        <div className="pb-5">
                            <h3>Описание</h3>
                            <div>{add1.description}</div>
                        </div>
                        {windowWidth.current < 990 ?
                            <>
                                <div className="pt-2 pb-5">
                                    <UserAddProfile key={user1.id} user={user1}/>
                                </div>
                            </>
                            :
                            <></>
                        }
                        {user.UserData.role === "ADMIN" ?
                            <>
                                <Button
                                    className="mb-3"
                                    onClick={StopAdd}
                                >
                                    Отправить в стоп лист
                                </Button>
                            </>
                            :
                            <></>
                        }
                    </div>
                    <div className="ADD_PAGE_SEC_2">
                        <div>
                            {windowWidth.current > 990 ?
                                <div className="w-100">
                                    <div className="d-flex justify-content-end">
                                        <img
                                            src={share}
                                            alt="Поделиться"
                                            width={50}
                                            height={50}
                                            onClick={CopyLink}
                                            id="add_share_button"
                                        />
                                    </div>
                                </div>
                                :
                                <></>
                            }
                            <div>
                                <div className="MAIN_TITLE">
                                    от {Math.floor(add1.price / 1000) ?
                                    Math.floor(add1.price / 1000) : <></>
                                } {add1.price % 1000 === 0 ?
                                    '000' : add1.price % 1000
                                }
                                    ₽ за сутки
                                </div>
                            </div>
                            <div>
                                {user.UserData.id ?
                                    <button
                                        className="profile_button"
                                        style={{
                                            background: "lightgray",
                                            color: "#000000"
                                        }}
                                    >
                                        Добавить в избранное
                                    </button>
                                    :
                                    <button
                                        className="profile_button"
                                        style={{
                                            background: "lightgray",
                                            color: "#000000"
                                        }}
                                        onClick={() => setAuthVisible(true)}
                                    >
                                        Добавить в избранное
                                    </button>
                                }
                                <button
                                    className="profile_button"
                                    onClick={ShowPhone}
                                    id="ADD_PHOTO"
                                >
                                    показать телефон
                                </button>
                            </div>
                            <UserAddProfile key={user1.id} user={user1}/>
                        </div>
                    </div>
                </div>
                <FormAuth show={formAuthVisible} onHide={() => setAuthVisible(false)}/>
                <FormSolution id={id} show={formSolutionVisible} onHide={() => setSolutionVisible(false)}/>
                <FormAddToStopListSuccessfully show={formStopListVisible} onHide={() => setFormStopListVisible(false)}/>
            </Container>
        </div>
    );
});

export default AddPage;

/*
{add1.info.map((info) =>
    <li key={info.id}>
        {info.title}: {info.description}
    </li>
)}
* */