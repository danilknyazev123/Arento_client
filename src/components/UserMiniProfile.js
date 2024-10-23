import React, {useContext} from 'react';
import {PROFILE_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {Context} from "../index";
import profile from "../Assets/profile.svg";
import favourites from "../Assets/favourites.svg";
import {Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const UserMiniProfile = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory()

    return (
        <div
            className="header_profile"
        >
            <div>
                <Image
                    alt="Избранное"
                    src={favourites}
                    width={30}
                    height={30}
                />
            </div>

            <div
                onClick={() => {
                    if (user.UserData && user.UserData.id) {
                        history.push(PROFILE_ROUTE + '/' + user.UserData.id);
                    }
                }
            }
            >
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <Image
                        alt="Фото профиля"
                        src={profile}
                        width={36}
                        height={36}
                    />
                    <div className="mt-0">
                        {String(user.UserData.nickname).slice(0, 5)}
                        {(String(user.UserData.nickname).length > 5) ?
                            <>...</>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
});

export default UserMiniProfile;