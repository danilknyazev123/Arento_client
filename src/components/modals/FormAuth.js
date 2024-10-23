import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";


const FormAuth = ({show, onHide}) => {

    const history = useHistory()

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Упс... Вы не авторизованы</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Чтобы воспользоваться этой функцией, пожалуйста, зарегистрируйтесь или авторизуйтесь</h5>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button
                    variant="primary"
                    onClick={() => history.push(LOGIN_ROUTE)}
                >
                    Авторизоваться
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormAuth;