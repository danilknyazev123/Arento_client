import React, {useRef, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import FormSelection from "../components/modals/FormSelection";
import {observer} from "mobx-react-lite";

import video2 from '../Assets/10.mp4'
import video1 from '../Assets/3.mp4'

const Main = observer(() => {

    const history = useHistory()

    const [formSelectionVisible, setFormSelectionVisible] = useState(false)

    const windowWidth = useRef(window.innerWidth)

    return (
        <>
            {windowWidth.current > 1220 ?
                <>
                    <video src={video2} autoPlay={true} loop muted></video>
                </>
                :
                <>
                    <video src={video1} autoPlay={true} loop muted></video>
                </>
            }
            <Container>
            <div className="BUTTONS_MAIN">
                    <h2>
                        Добро пожаловать на сайт собственников жилья Кисловодска
                    </h2>
                    <div className="main_page_buttons_container">
                        <Button
                            className="main_button"
                            onClick={() => history.push(SHOP_ROUTE)}
                        >
                            Смотреть квартиры
                        </Button>
                        <Button
                            className="main_button"
                            onClick={() => setFormSelectionVisible(true)}
                        >
                            Бесплатный подбор жилья
                        </Button>
                    </div>
                </div>
            </Container>
            <FormSelection show={formSelectionVisible} onHide={() => setFormSelectionVisible(false)}/>
        </>
    );
});

export default Main;