import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createHeating} from "../../http/addApi";

const CreateHeating = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addHeating = () => {
        createHeating({value: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите тип отопления"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addHeating}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateHeating;