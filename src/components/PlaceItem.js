import React from 'react';
import {useHistory} from "react-router-dom";
import {PLACES_ROUTE} from "../utils/consts";
import parser from "bbcode-to-react";
const PlaceItem = ({place}) => {

    const history = useHistory()

    return (
        <div onClick={() => history.push(PLACES_ROUTE + '/' + place.id)}>
            <div className="place-section">
                <div className="place-item">
                    <div className="h2 ml-3">
                        {place.title}
                    </div>
                    <div className="d-flex flex-row">
                        <div className="place-photo">
                            <img
                                src={process.env.REACT_APP_API_URL + 'places/place' + place.id + '/' + place.photo1}
                                alt="Фото интересного места №1"
                                width={700}
                                height={400}
                            />
                        </div>
                        <div className="place-photo">
                            <img
                                src={process.env.REACT_APP_API_URL + 'places/place' + place.id + '/' + place.photo2}
                                alt="Фото интересного места №2"
                                width={700}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="place-description">
                        <p>{parser.toReact(`${place.description1}`)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceItem;