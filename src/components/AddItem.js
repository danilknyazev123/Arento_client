import React, {useContext, useRef} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {ADD_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {Context} from "../index";

const AddItem = ({add}) => {
    const history = useHistory()
    const location = useLocation()
    const windowWidth = useRef(window.innerWidth)

    const {user} = useContext(Context)

    const slideStyles = {
        margin: "8px",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${process.env.REACT_APP_API_URL + 'adds/user' + add.userId + '/' + add.id + '/' + add.image})`
    }

    return (
        <>
            <div onClick={() => history.push(ADD_ROUTE + '/' + add.id)} className="ADD_ITEM"
                 style={(String(location.pathname).slice(0,8) === "/profile") ? {
                     cursor: 'pointer',
                 } : {
                     cursor: 'pointer'
                 }}
            >
                {Number(user.UserData.id) === Number(add.userId) && add.message && add.isChecked !== true ?
                    <div
                        className="message_denied"
                    >
                        {add.message}
                    </div>
                    :
                    <></>
                }
                <div className={windowWidth.current < 577 ? "d-flex flex-column" : "d-flex"}>
                    <div>
                        <div className="ADD_ITEM_PHOTO" style={slideStyles}></div>
                    </div>
                    <div className="ADD_INFO">
                        <div className="ADD_ITEM_INFO">
                            {add.title}
                            <div className="ADD_ITEM_PRICE_BUTTON">
                                <Button>Показать цены</Button>
                            </div>
                        </div>
                        <div className="ADD_ITEM_MORE_INFO">{add.address}</div>
                        <div className="ADD_ITEM_DESCRIPTION">
                            {add.description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddItem;