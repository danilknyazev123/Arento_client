import React from 'react';
import {Form, InputGroup} from "react-bootstrap";

const SquareBar = () => {
    return (
        <div>
            <h6>Общая площадь, м<sup>2</sup></h6>
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
};

export default SquareBar;