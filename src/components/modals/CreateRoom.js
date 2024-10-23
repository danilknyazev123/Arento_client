import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createRoom} from "../../http/addApi";

const CreateRoom = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addRoom = () => {
        createRoom({value: value}).then(data => {
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
                        placeholder={"Введите количество комнат"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addRoom}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateRoom;