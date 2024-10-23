import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, Redirect, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import SuccessfulReg from "../components/modals/SuccessfulReg";

const Auth = observer(() => {
    const {user} = useContext(Context)

    const [formSuccessfulReg, setFormSuccessfulReg] = useState(false)

    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const [passwordShow, setPasswordShow] = useState(1)

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                if(email){
                    data = await login(email, password);
                    if(data)
                    {
                        user.setIsAuth(true)
                        user.setUserData(data)
                        history.push(SHOP_ROUTE)
                    }
                } else {
                    alert('Введите электронную почту')
                }
            } else {
                const isChecked = document.getElementById('inline-checkbox-100').checked
                if(isChecked === true){
                    if (email) {
                        if (password === passwordRepeat){
                            data = await registration(email, nickname, password);
                            if(data)
                            {
                                setFormSuccessfulReg(true)
                            }
                        } else {
                            alert('Пароли не совпадают')
                        }
                    } else {
                        alert('Введите электронную почту')
                    }
                } else {
                    alert('Вы должны быть согласны с условиями Arento')
                }
            }
        } catch (e) {
            alert('Непредвиденная ошибка')
        }
    }

    function ShowPassword() {
        setPasswordShow(!passwordShow)

        const password = document.getElementById('password')
        const passwordRepeat = document.getElementById('password_repeat')

        if(passwordShow){
            password.type = 'text'
            if(passwordRepeat){
                passwordRepeat.type = 'text'
            }
        } else {
            password.type = 'password'
            if(passwordRepeat){
                passwordRepeat.type = 'password'
            }
        }
    }

    if(user.isAuth && user.UserData){
        return(
            <Redirect to={SHOP_ROUTE}></Redirect>
        )
    } else {
        return (
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 120}}
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Электронная почта"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {!isLogin ?
                            <Form.Control
                                className="mt-3"
                                placeholder="Имя пользователя"
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                            />
                            :
                            <></>
                        }
                        <Form.Control
                            className="mt-3"
                            placeholder="Пароль (8 и более знаков)"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            id="password"
                        />
                        {isLogin ?
                            <>
                                {['checkbox'].map((type) => (
                                    <div
                                        key={`inline-${type}`}
                                        className="mt-2 pointer-event">
                                        <Form.Check
                                            inline
                                            label="Показать пароль"
                                            name="group51"
                                            type={type}
                                            value="Да"
                                            id={`inline-${type}-50`}
                                            onClick={ShowPassword}
                                        />
                                    </div>
                                ))}
                            </>
                            :
                            <></>
                        }
                        {!isLogin ?
                            <Form.Control
                                className="mt-3"
                                placeholder="Повторите пароль... "
                                id="password_repeat"
                                value={passwordRepeat}
                                onChange={e => setPasswordRepeat(e.target.value)}
                                type="password"
                            />
                            :
                            <></>
                        }
                        {!isLogin ?
                            <>
                                {['checkbox'].map((type) => (
                                    <div
                                        key={`inline-${type}`}
                                        className="mt-2 pointer-event">
                                        <Form.Check
                                            inline
                                            label="Показать пароль"
                                            name="group51"
                                            type={type}
                                            value="Да"
                                            id={`inline-${type}-50`}
                                            onClick={ShowPassword}
                                        />
                                    </div>
                                ))}
                            </>
                            :
                            <></>
                        }
                        <Row className="d-flex justify-content-end mt-3 pl-3 pr-3">
                            {isLogin ?
                                <div className="d-flex mt-3 pr-3">
                                    <div>
                                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div>
                                        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                    </div>
                                    <div className="pt-2">
                                        {['checkbox'].map((type) => (
                                            <div
                                                key={`inline-${type}`}
                                                className="pointer-event">
                                                <Form.Check
                                                    inline
                                                    type={type}
                                                    id={`inline-${type}-100`}
                                                />
                                                Согласен с
                                                <a
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    href={process.env.REACT_APP_API_URL + 'policy/TermsOfUse.pdf'}
                                                    download="TermsOfUse.pdf"
                                                > Правилами использования
                                                </a> и <a
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    href={process.env.REACT_APP_API_URL + 'policy/ConfidencePolicy.pdf'}
                                                    download="ConfidencePolicy.pdf"
                                                >
                                                Политикой конфиденциальности
                                                </a> Arento
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                            <Button
                                variant={"outline-success"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Зарегистрироваться'}
                            </Button>
                        </Row>
                    </Form>
                </Card>
                <SuccessfulReg show={formSuccessfulReg} onHide={() =>setFormSuccessfulReg(false)}/>
            </Container>
        );
    }
});

export default Auth;