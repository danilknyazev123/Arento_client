import React from 'react';
import {Button, Modal} from "react-bootstrap";


const FormAddToStopListSuccessfully = ({show, onHide}) => {

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Успешно отправлено в стоплист!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Теперь объявление не будет показано в поиске.</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormAddToStopListSuccessfully;