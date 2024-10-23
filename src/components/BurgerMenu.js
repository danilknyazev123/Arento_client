import React, {useContext} from 'react';
import {ABOUT_US_ROUTE, BLOG_ROUTE, MAIN_ROUTE, PHOTO_GALLERY_ROUTE, PLACES_ROUTE, SHOP_ROUTE} from "../utils/consts";
import PlaceNavItem from "./PlaceNavItem";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import cancel from "../Assets/cancel.svg"

const BurgerMenu = ({active, setActive}) => {

    const {add} = useContext(Context)

    const history = useHistory()

    return (
        <>
           <div
               className={active ? "blur active" : "blur"}
               onClick={() => setActive(false)}>
           </div>
           <div className={active ? "burger-menu active" : "burger-menu"}>
               <div className={active ? "burger-menu-header active" : "burger-menu-header"}>
                   <div className="burger-menu-title">
                       Меню
                   </div>
                   <div onClick={() => setActive(false)}>
                       <img id="cancel-svg" src={cancel} alt="Закрыть меню"/>
                   </div>
               </div>
               <ul>
                   <li className="list">
                       <a onClick={() => {history.push(MAIN_ROUTE); setActive(false)}}>Главная</a>
                   </li>
                   <li className="list">
                       <a onClick={() => {history.push(SHOP_ROUTE); setActive(false)}}>Жилье</a>
                   </li>
                   <li className="list">
                       <a onClick={() => {history.push(PLACES_ROUTE); setActive(false)}}>Интересные места</a>
                       <ul className="submenu">
                           <li>
                               <a onClick={() => {history.push(PLACES_ROUTE + '/history'); setActive(false)}}>История развития города</a>
                           </li>
                           <li>
                               <a onClick={() => {history.push(PLACES_ROUTE + '/natural'); setActive(false)}}>Природные богатства</a>
                               <ul className="submenu2">
                                   {add.places.slice(1, 6).map(place =>
                                       <PlaceNavItem key={place.id} place={place}/>
                                   )}
                               </ul>
                           </li>
                           <li>
                               <a onClick={() => {history.push(PLACES_ROUTE + '/architecture'); setActive(false)}}>Архитектурa и
                                   искусство
                               </a>
                               <ul className="submenu2">
                                   {add.places.slice(6, 19).map(place =>
                                       <PlaceNavItem key={place.id} place={place}/>
                                   )}
                               </ul>
                           </li>
                           <li>
                               <a onClick={() => {history.push(PLACES_ROUTE + '/leisure'); setActive(false)}}>Досуг</a>
                               <ul className="submenu2">
                                   {add.places.slice(19, 29).map(place =>
                                       <PlaceNavItem key={place.id} place={place}/>
                                   )}
                               </ul>
                           </li>
                       </ul>
                   </li>
                   <li className="list">
                       <a onClick={() => {history.push(PHOTO_GALLERY_ROUTE); setActive(false)}}>Фотогалерея</a>
                   </li>
                   <li className="list">
                       <a onClick={() => {history.push(BLOG_ROUTE); setActive(false)}}>Блог</a>
                   </li>
                   <li className="list">
                       <a onClick={() => {history.push(ABOUT_US_ROUTE); setActive(false)}}>О нас</a>
                       <ul className="submenu">
                           <li><a onClick={() => {history.push(ABOUT_US_ROUTE); setActive(false)}}>Дорожная карта</a></li>
                           <li><a onClick={() => {history.push(ABOUT_US_ROUTE); setActive(false)}}>Правовая информация</a></li>
                           <li><a onClick={() => {history.push(ABOUT_US_ROUTE); setActive(false)}}>Контакты</a></li>
                           <li><a onClick={() => {history.push(ABOUT_US_ROUTE); setActive(false)}}>Информация</a></li>
                       </ul>
                   </li>
               </ul>
           </div>
        </>
    );
};

export default BurgerMenu;