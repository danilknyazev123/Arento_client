import React from 'react';
import {Button, Modal} from "react-bootstrap";


const SuccessfulReg = ({show, onHide}) => {

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Регистрация прошла успешно!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Перейдите по отправленной на вашу почту активационной ссылке. Проверьте, пожалуйста, папку спам.
                    После активации вы сможете войти в свой аккаунт.</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SuccessfulReg;