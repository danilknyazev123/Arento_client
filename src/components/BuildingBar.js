import React from 'react';
import {observer} from "mobx-react-lite";
import {Form} from "react-bootstrap";

const BuildingBar = observer(() => {

    return (
        <div>
            <h6>Тип здания</h6>
            {['checkbox'].map((type) => (
                <div
                    key={`inline-${type}`}
                    className="mb-3 pointer-event">
                    <Form.Check
                        inline
                        label="Новостройка"
                        name="group8"
                        type={type}
                        value="1"
                        id={`inline-${type}-8`}
                    />
                    <Form.Check
                        inline
                        label="Старый фонд"
                        name="group9"
                        type={type}
                        value="2"
                        id={`inline-${type}-9`}
                    />
                    <Form.Check
                        inline
                        label="Иное"
                        name="group10"
                        type={type}
                        value="3"
                        id={`inline-${type}-10`}
                    />
                </div>
            ))}
        </div>
    );
});

export default BuildingBar;