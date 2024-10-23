import React from 'react';
import {observer} from "mobx-react-lite";
import {Form} from "react-bootstrap";

const RepairBar = observer(() => {
    return (
        <div>
            <h6>Ремонт</h6>
            {['checkbox'].map((type) => (
                <div
                    key={`inline-${type}`}
                    className="mb-3 pointer-event">
                    <Form.Check
                        inline
                        label="Дизайнерский"
                        name="group11"
                        type={type}
                        value="1"
                        id={`inline-${type}-11`}
                    />
                    <Form.Check
                        inline
                        label="Евро"
                        name="group12"
                        type={type}
                        value="2"
                        id={`inline-${type}-12`}
                    />
                    <Form.Check
                        inline
                        label="Косметический"
                        name="group13"
                        type={type}
                        value="3"
                        id={`inline-${type}-13`}
                    />
                    <Form.Check
                        inline
                        label="Без ремонта"
                        name="group14"
                        type={type}
                        value="4"
                        id={`inline-${type}-14`}
                    />
                </div>
            ))}
        </div>
    );
});

export default RepairBar;