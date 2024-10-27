import React from 'react';
import {Button, Modal} from "react-bootstrap";
const Error = ({show, onHide, alert, mother}) => {

    function changeForm() {
        const form1 = document.getElementById('selection_form')
        form1.style.display = 'block'
        onHide(true)
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Ошибка!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>{alert}</h6>
            </Modal.Body>
            <Modal.Footer>
                {mother === '1' ?
                    <>
                        <Button variant="secondary" onClick={changeForm}>
                            Закрыть
                        </Button>
                    </>
                    :
                    <>
                        <Button variant="secondary" onClick={onHide}>
                            Закрыть
                        </Button>
                    </>
                }
            </Modal.Footer>
        </Modal>
    );
};

export default Error;