import React from 'react';
import parser from 'bbcode-to-react';
const PlaceMainItem = ({place}) => {


    return (
        <div>
            <div className="place-section">
                <div className="">
                    <div className="h1 ml-3">
                        {place.title}
                    </div>
                    <div className="d-flex flex-row">
                        <div className="place-photo">
                            <img
                                src={process.env.REACT_APP_API_URL + 'places/place' + place.id + '/' + place.photo1}
                                alt="Фото интересного места №1"
                            />
                        </div>
                        <div className="place-photo">
                            <img
                                src={process.env.REACT_APP_API_URL + 'places/place' + place.id + '/' + place.photo2}
                                alt="Фото интересного места №2"
                            />
                        </div>
                    </div>
                    <div className="place-description-main">
                        <p>{parser.toReact(`${place.description1}`)}</p>
                    </div>
                    {place.photo3 ?
                        <>
                            <div className="place-photo-sup">
                                <img
                                    src={process.env.REACT_APP_API_URL + 'places/place' + place.id + '/' + place.photo3}
                                    alt="Фото интересного места №3"
                                />
                            </div>
                        </>
                        :
                        <></>
                    }
                    {place.description2 ?
                        <>
                            <div className="place-description-main">
                                <p>{parser.toReact(`${place.description2}`)}</p>
                            </div>
                            {place.description3 ?
                                <>
                                    <div className="place-description-main mb-4">
                                        <p>{parser.toReact(`${place.description3}`)}</p>
                                    </div>
                                </>
                                :
                                <></>
                            }
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlaceMainItem;