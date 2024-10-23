import React from 'react';
import {Button, Modal} from "react-bootstrap";

const CompressForm = ({show, onHide, text}) => {
    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="md"
            centered
        >
            <Modal.Header>
                <Modal.Title>Обработка изображений</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>{text}</h6>
            </Modal.Body>
            <Modal.Footer>
                {text === 'Объявление успешно размещено!' ?
                    <>
                        <Button variant="secondary" onClick={onHide}>
                            Закрыть
                        </Button>
                    </>
                    :
                    <></>
                }

            </Modal.Footer>
        </Modal>
    );
};

export default CompressForm;