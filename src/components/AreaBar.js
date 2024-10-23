import React from 'react';
import Form from 'react-bootstrap/Form';

const AreaBar = () => {
    return (
        <div>
            <h6>Район города</h6>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Колоннада"
                        name="group1"
                        type={type}
                        value="1"
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Никольского Собора"
                        name="group2"
                        type={type}
                        value="2"
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        label="Центрального рынка"
                        name="group3"
                        type={type}
                        value="3"
                        id={`inline-${type}-3`}
                    />
                    <Form.Check
                        inline
                        label="Въезд в город"
                        name="group4"
                        type={type}
                        value="4"
                        id={`inline-${type}-4`}
                    />
                    <Form.Check
                        inline
                        label="Санаторий Москва"
                        name="group5"
                        type={type}
                        value="5"
                        id={`inline-${type}-5`}
                    />
                    <Form.Check
                        inline
                        label="ул. Декабристов"
                        name="group6"
                        type={type}
                        value="6"
                        id={`inline-${type}-6`}
                    />
                    <Form.Check
                        inline
                        label="Другие"
                        name="group7"
                        type={type}
                        value="7"
                        id={`inline-${type}-7`}
                    />
                </div>
            ))}
        </div>
    );
};

export default AreaBar;