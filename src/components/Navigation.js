import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory, useLocation} from "react-router-dom";
import FormSelection from "./modals/FormSelection";
import {Context} from "../index";
import {fetchAllPlaces} from "../http/placesApi";
import BurgerMenu from "./BurgerMenu";
import {ABOUT_US_ROUTE, BLOG_ROUTE, MAIN_ROUTE, PHOTO_GALLERY_ROUTE, PLACES_ROUTE, SHOP_ROUTE} from "../utils/consts";
import PlaceNavItem from "./PlaceNavItem";

import menu from "../Assets/menu.svg"
import Error from "./modals/Error";

const Navigation = observer(() => {
    let location = useLocation()

    const {add} = useContext(Context)

    let list = document.querySelectorAll('.list')

    const history = useHistory()

    const [formSelectionVisible, setFormSelectionVisible] = useState(false)
    const [menuActive, setMenuActive] = useState(false);
    const [errorActive, setErrorActive] = useState(false)
    const [alertText, setAlertText] = useState('')

    const windowWidth = useRef(window.innerWidth)
    function clearActives(){
        for(let i = 0; i < list.length; i++){
            list[i].classList.remove('active')
        }
    }

    useEffect(() => {
        try{
            if(location.pathname === '/main'){
                clearActives()
                list[0].classList.add('active')
            } else if (location.pathname === '/' || location.pathname === ''){
                clearActives()
                list[1].classList.add('active')
            } else if (location.pathname === '/places' ||
                location.pathname === '/places/history' ||
                location.pathname === '/places/natural' ||
                location.pathname === '/places/architecture' ||
                location.pathname === '/places/leisure'
            ){
                clearActives()
                list[2].classList.add('active')
            } else if (location.pathname === '/photo_gallery'){
                clearActives()
                list[3].classList.add('active')
            } else if (location.pathname === '/blog'){
                clearActives()
                list[4].classList.add('active')
            } else if (location.pathname === '/about'){
                clearActives()
                list[5].classList.add('active')
            } else {
                clearActives()
            }
        } catch (e) {

        }
    }, [list]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchAllPlaces().then(data => {
                    add.setPlaces(data.rows)
                })
            } catch (error) {
                setAlertText('Ошибка при загрузке данных')
                setErrorActive(true)
            }
        };
        fetchData().then()
    }, []);

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav>
                        <div className="navbar_menu">
                            <div
                                className="navbar_menu_icon"
                                onClick={() => setMenuActive(!menuActive)}
                            >
                                <img
                                    src={menu}
                                    alt="Иконка меню"
                                />
                                <span/>
                            </div>
                        </div>
                        <ul className="menu">
                            <li className="list">
                                <a
                                    href="/main"
                                    onClick={() => history.push(MAIN_ROUTE)}
                                >
                                    Главная
                                </a>
                            </li>
                            <li className="list">
                                <a onClick={() => history.push(SHOP_ROUTE)}>Жилье</a>
                            </li>
                            <li className="list">
                                <a onClick={() => history.push(PLACES_ROUTE)}>Интересные места</a>
                                <ul className="submenu">
                                    <li>
                                        <a onClick={() => history.push(PLACES_ROUTE + '/history')}>История развития
                                            города</a>
                                    </li>
                                    <li>
                                        <a onClick={() => history.push(PLACES_ROUTE + '/natural')}>Природные
                                            богатства</a>
                                        <ul className="submenu2">
                                            {add.places.slice(1, 6).map(place =>
                                                <PlaceNavItem key={place.id} place={place}/>
                                            )}
                                        </ul>
                                    </li>
                                    <li>
                                        <a onClick={() => history.push(PLACES_ROUTE + '/architecture')}>Архитектурa и
                                            искусство</a>
                                        <ul className="submenu2">
                                            {add.places.slice(6, 19).map(place =>
                                                <PlaceNavItem key={place.id} place={place}/>
                                            )}
                                        </ul>
                                    </li>
                                    <li>
                                        <a onClick={() => history.push(PLACES_ROUTE + '/leisure')}>Досуг</a>
                                        <ul className="submenu2">
                                            {add.places.slice(19, 33).map(place =>
                                                <PlaceNavItem key={place.id} place={place}/>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="list">
                                <a onClick={() => history.push(PHOTO_GALLERY_ROUTE)}>Фотогалерея</a>
                            </li>
                            <li className="list">
                                <a onClick={() => history.push(BLOG_ROUTE)}>Блог</a>
                            </li>
                            <li className="list">
                                <a onClick={() => history.push(ABOUT_US_ROUTE)}>О нас</a>
                                <ul className="submenu">
                                    <li><a onClick={() => history.push(ABOUT_US_ROUTE)}>Информация</a></li>
                                    <li><a onClick={() => history.push(ABOUT_US_ROUTE)}>Дорожная карта</a></li>
                                    <li><a onClick={() => history.push(ABOUT_US_ROUTE)}>Правовая информация</a></li>
                                    <li><a onClick={() => history.push(ABOUT_US_ROUTE)}>Контакты</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Nav>
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            className="p-1"
                            onClick={() => setFormSelectionVisible(true)}
                        >
                            {windowWidth.current < 280 ? "Заказать подбор" : "Заказать подбор квартиры"}
                        </Button>
                    </Nav>
                    <FormSelection show={formSelectionVisible} onHide={() => setFormSelectionVisible(false)}/>
                </Container>
            </Navbar>
            <Error alert={alertText} show={errorActive} onHide={() => setErrorActive(false)}/>
            <BurgerMenu active={menuActive} setActive={setMenuActive}/>
        </>
    );
});

export default Navigation;