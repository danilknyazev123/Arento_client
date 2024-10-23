import React, {useRef} from 'react';
import {useHistory} from "react-router-dom";
import {PROFILE_ROUTE} from "../utils/consts";

import photo from "../Assets/profile.svg"

const UserAddProfile = ({user}) => {
    const history = useHistory()

    const windowWidth = useRef(window.innerWidth)

    return (
        <div onClick={() => history.push(PROFILE_ROUTE + '/' + user.id)} className="ADD_PAGE_PROFILE">
            <div className="ADD_PAGE_PROFILE_PART_1">
                <div className={windowWidth.current < 992 ? "d-flex" : ""} style={{cursor: 'pointer'}}>
                    <img alt="Фото профиля пользователя" src={photo}/>
                    <div className="user_add_profile_text">
                        {user.nickname}<br/>
                        Арендодатель<br/>
                        На Arento с {String(user.createdAt).slice(0, 10)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAddProfile;