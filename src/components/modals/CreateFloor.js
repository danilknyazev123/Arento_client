import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createFloor} from "../../http/addApi";

const CreateFloor = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addFloor = () => {
        createFloor({value: value}).then(data => {
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
                        placeholder={"Введите этаж"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addFloor}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateFloor;