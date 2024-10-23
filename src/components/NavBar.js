import React, {useContext, useRef} from 'react';
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import logotip from "../Assets/Logotip.png"
import logo from "../Assets/LOGO.png"

import UserMiniProfile from "./UserMiniProfile";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const windowWidth = useRef(window.innerWidth)
    return (
        <Navbar className="NAVBAR">
            <Container>
                <Nav>
                    <button
                        onClick={() => history.push(SHOP_ROUTE)}
                        className="button_nav"
                    >
                        <Image
                            alt="Логотип"
                            src={(windowWidth.current > 576) ?
                                logo
                                :
                                logotip
                            }
                            id="logo"
                            className="d-inline-block align-top"
                        />
                    </button>
                </Nav>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {user.UserData.role === "ADMIN" ?
                            <Button
                                variant={"outline-light"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            :
                            <></>
                        }
                        <UserMiniProfile/>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
