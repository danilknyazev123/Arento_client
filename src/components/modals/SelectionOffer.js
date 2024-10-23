import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import FormSelection from "./FormSelection";

const SelectionOffer = ({show, onHide}) => {
    const [formSelectionVisible, setFormSelectionVisible] = useState(false)

    const chooseSelection = (onHide) => {
        onHide(false)
        setFormSelectionVisible(true)
    }


    return (
        <>
            <Modal
                show = {show}
                onHide = {onHide}
                size="md"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Устали искать? Подберем бесплатно!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Оставьте заявку на подбор, и мы свяжемся с Вами в ближайшее время.</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => chooseSelection(onHide)}
                    >
                        Оставить заявку
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={onHide}
                    >
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
            <FormSelection show={formSelectionVisible} onHide={() => setFormSelectionVisible(false)}/>
        </>
    );
};

export default SelectionOffer;