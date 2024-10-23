import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {
    createBlog
} from "../../http/addApi";
import {observer} from "mobx-react-lite";

const CreateBlog = observer(({show, onHide}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files)
    }

    const addBlog = () => {
        const formData = new FormData()
        Array.from(file).forEach(file1 => {
            formData.append('img', file1);
        })
        formData.append('title', title)
        formData.append('description', description)
        createBlog(formData).then(data => onHide())
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
                        placeholder="Введите название объявления"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        multiple={true}
                        onChange={selectFile}
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addBlog}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBlog;