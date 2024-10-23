import {YMaps, Map, FullscreenControl, Placemark} from 'react-yandex-maps';
import {useRef} from "react";
function AddMap({add}) {
    const windowWidth = useRef(window.innerWidth)

    return (
        <>
            <YMaps
                enterprise
                query={{
                    apikey: '4de870c8-5e28-4cee-a429-639e86c915d7',
                    lang: 'ru_RU'
                }}
            >
                <Map style={windowWidth.current > 1200 ?
                    {
                        width: 710, height: 500
                    }
                    :
                    windowWidth.current > 990 ?
                            {width: 675, height: 450}
                            :
                            {width: '100%', height: 270}
                    }
                     defaultState={{
                         center: [43.905516,  42.715717],
                         zoom: 13
                     }}
                >
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        defaultGeometry={[add.latitude, add.longitude]}
                        properties={{
                            balloonContentBody:
                                `
                                <div>
                                    <h6>${add.title}</h6>
                                    ${add.roomId} комнатная квартира<br>
                                    от ${add.price} за сутки<br>
                                    ${add.address}
                                </div>
                            `
                        }}
                    />
                    <FullscreenControl />
                </Map>
            </YMaps>
        </>
    );
}

export default AddMap;
