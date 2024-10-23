import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {updateAdd} from "../../http/addApi";


const SuccessfulReg = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const UpdateAdd = () => {
        const formData = new FormData()
        formData.append('id', value)
        updateAdd(formData).then(data => {
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
                        placeholder={"Введите id объявления"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={UpdateAdd}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SuccessfulReg;