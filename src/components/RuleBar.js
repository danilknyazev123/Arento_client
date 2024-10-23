import React from 'react';
import {Form} from "react-bootstrap";

const RuleBar = () => {
    return (
        <div>
            <h6>Правила заселения</h6>
            {['checkbox'].map((type) => (
                <div
                    key={`inline-${type}`}
                    className="mb-3 pointer-event">
                    <Form.Check
                        inline
                        label="Можно с животными"
                        name="group21"
                        type={type}
                        value="1"
                        id={`inline-${type}-21`}
                    />
                    <Form.Check
                        inline
                        label="Можно с детьми"
                        name="group22"
                        type={type}
                        value="2"
                        id={`inline-${type}-22`}
                    />
                    <Form.Check
                        inline
                        label="Можно курить"
                        name="group23"
                        type={type}
                        value="3"
                        id={`inline-${type}-23`}
                    />
                </div>
            ))}
        </div>
    );
};

export default RuleBar;