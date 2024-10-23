import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

import {observer} from "mobx-react-lite";
import {createPlace} from "../../http/placesApi";

const CreatePlace = observer(({show, onHide}) => {
    const [title, setTitle] = useState('')
    const [description1, setDescription1] = useState('')
    const [description2, setDescription2] = useState('')
    const [description3, setDescription3] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files)
    }

    const addPlace = () => {
        const formData = new FormData()
        Array.from(file).forEach(file1 => {
            formData.append('img', file1);
        })
        formData.append('title', title)
        formData.append('description1', description1)
        formData.append('description2', description2)
        formData.append('description3', description3)
        createPlace(formData).then(data => onHide())
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название места"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        multiple={true}
                        onChange={selectFile}
                    />
                    <Form.Control
                        value={description1}
                        onChange={e => setDescription1(e.target.value)}
                        className="mt-3"
                        as="textarea"
                        placeholder="Введите первую часть текста"
                    />
                    <Form.Control
                        value={description2}
                        onChange={e => setDescription2(e.target.value)}
                        className="mt-3"
                        as="textarea"
                        placeholder="Введите вторую часть текста"
                    />
                    <Form.Control
                        value={description3}
                        onChange={e => setDescription3(e.target.value)}
                        className="mt-3"
                        as="textarea"
                        placeholder="Введите третью часть текста"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addPlace}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePlace;