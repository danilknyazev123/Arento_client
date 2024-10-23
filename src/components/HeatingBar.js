import React from 'react';
import {observer} from "mobx-react-lite";
import {Form} from "react-bootstrap";

const HeatingBar = observer(() => {
    return (
        <div>
            <h6>Отопление</h6>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Индивидуальное"
                        name="group15"
                        type={type}
                        value="1"
                        id={`inline-${type}-15`}
                    />
                    <Form.Check
                        inline
                        label="Центральное"
                        name="group16"
                        type={type}
                        value="2"
                        id={`inline-${type}-16`}
                    />
                    <Form.Check
                        inline
                        label="Печное (форсуночное)"
                        name="group17"
                        type={type}
                        value="3"
                        id={`inline-${type}-17`}
                    />
                </div>
            ))}
        </div>
    );
});

export default HeatingBar;