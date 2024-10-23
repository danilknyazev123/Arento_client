import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createRepair} from "../../http/addApi";

const CreateRepair = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addRepair = () => {
        createRepair({value: value}).then(data => {
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
                        placeholder={"Введите тип ремонта"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addRepair}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateRepair;