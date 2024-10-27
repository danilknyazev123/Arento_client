import React, {useContext, useEffect, useRef, useState} from 'react';
import photo from "../Assets/profile.svg";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {fetchOneUser} from "../http/addApi";
import {Context} from "../index";
import {Button} from "react-bootstrap";
import {logout} from "../http/userApi";
import Error from "./modals/Error";

const UserProfile = () => {
    const {user} = useContext(Context)

    const {id} = useParams()

    const [user1, setUser1] = useState([])
    const [errorActive, setErrorActive] = useState(false)
    const [alertText, setAlertText] = useState('')

    const windowWidth = useRef(window.innerWidth)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchOneUser(id);
                setUser1(data);
            } catch (error) {
                setAlertText('Ошибка при загрузке данных')
                setErrorActive(true)
            }
        };
        fetchData().then();
    }, [id]);

    const logOut = () => {
        logout().then(data => {
            user.setUserData({})
            user.setIsAuth(false)
        })
        user.setUserData({})
        user.setIsAuth(false)
    }

    return (
        <>
            <div className={windowWidth.current < 767 ? "d-flex flex-row align-content-between justify-content-between"
                :
                "d-flex flex-column align-content-between justify-content-between"
            }>
                {windowWidth.current < 767 ?
                    <></>
                    :
                    <>
                        <div className="PROFILE_PHOTO">
                            <img alt="Фото профиля" src={photo}/>
                        </div>
                    </>
                }
                <div className={windowWidth.current < 767 ? "mt-4" : ""}>
                    <div className="PROFILE_ACTION">
                        <h4>{String(user1.nickname)}</h4>
                    </div>
                    <div className="PROFILE_ACTION">
                        <h6>На Arento с {String(user1.createdAt).slice(0, 10)}</h6>
                    </div>
                    {Number(user.UserData.id) === Number(id) ?
                        <Button
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                        :
                        <></>
                    }
                </div>

                {windowWidth.current < 767 ?
                    <>
                        <div className="PROFILE_PHOTO">
                            <img alt="Фото профиля" src={photo}/>
                        </div>
                    </>
                    :
                    <></>
                }
            </div>
            <Error alert={alertText} show={errorActive} onHide={() => setErrorActive(false)}/>
        </>
    );
};

export default UserProfile;