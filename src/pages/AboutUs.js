import React from 'react';
import {observer} from "mobx-react-lite";
import {Container, Image} from "react-bootstrap";
import roadMap from "../Assets/roadMap.png"
import InformationText from "../components/InformationText";
import RoadMap from "../components/RoadMap";
import ContactsInfoText from "../components/ContactsInfoText";
import LegalInfoText from "../components/LegalInfoText";

const AboutUs = observer(() => {


    return (
        <Container>
            <div>
                <h1 className="about_us_main_title">
                    О нас
                </h1>
            </div>
            <div>
                <div>
                    <h2 className="about_us_title">
                        Информация
                    </h2>
                    <InformationText/>
                </div>
                <h2 className="about_us_title">
                    Дорожная карта
                </h2>
                <div className="road_map_section">
                    <div className="road_map">
                        <div className="road_map_menu">
                            <h2>План развития Arento</h2>
                            <div className="road_map_font">Узнайте об истории Arento и планах развития нашего
                                продукта.
                            </div>
                        </div>
                        <div>
                            <Image
                                src={roadMap}
                                alt="Дорожная карта"
                                width={400}
                            />
                        </div>
                    </div>
                </div>
                <RoadMap/>
            </div>
            <div>
                <h2 className="about_us_title">
                    Правовая информация
                </h2>
                <LegalInfoText/>
            </div>
            <div>
                <h2 className="about_us_title">
                    Контакты
                </h2>
                <ContactsInfoText/>
            </div>
            <div>
            </div>
        </Container>
    );
});

export default AboutUs;