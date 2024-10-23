import React from 'react';
import {observer} from "mobx-react-lite";
import {Form, InputGroup} from "react-bootstrap";

const
    RoomBar = observer(() => {
    return (
        <div>
            <h6>Количество комнат</h6>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="От"
                    aria-label="First name"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                />
                <Form.Control
                    placeholder="До"
                    aria-label="Last name"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                />
            </InputGroup>
        </div>
    );
});

export default RoomBar;