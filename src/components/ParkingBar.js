import React from 'react';
import {Form} from "react-bootstrap";

const ParkingBar = () => {
    return (
        <div>
            <h6>Парковка</h6>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Подземная"
                        name="group18"
                        type={type}
                        value="1"
                        id={`inline-${type}-18`}
                    />
                    <Form.Check
                        inline
                        label="Открытая во дворе"
                        name="group19"
                        type={type}
                        value="2"
                        id={`inline-${type}-19`}
                    />
                    <Form.Check
                        inline
                        label="Отсутствует"
                        name="group20"
                        type={type}
                        value="3"
                        id={`inline-${type}-20`}
                    />
                </div>
            ))}
        </div>
    );
};

export default ParkingBar;