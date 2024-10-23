import React, {useContext, useState} from 'react';
import {Button, Dropdown, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {checkedAdd, rejectedAdd} from "../../http/addApi";
import {Context} from "../../index";

const FormSolution = ({show, onHide, id}) => {

    const {add} = useContext(Context)

    const [message, setMessage] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const rejectAdd = () => {
        try{
            if(id && message){
                if(!longitude && !latitude && !add.selectedArea.id){
                    const formData = new FormData()
                    formData.append('id', id)
                    formData.append('message', message)
                    rejectedAdd(formData).then()
                    alert('Успешно! Сообщение обновлено')
                } else {
                    alert('Удалите данные из полей широты, долготы и района города')
                }
            } else {
                alert('Введите недостающие данные и перезагрузите страницу')
            }
        } catch (e) {
            alert(e)
        }

    }

    const confirmAdd = () => {
        try {
            if(id && latitude && longitude && add.selectedArea.id){
                if(!message){
                    const formData = new FormData()
                    formData.append('id', id)
                    formData.append('areaId', add.selectedArea.id)
                    formData.append('latitude', latitude)
                    formData.append('longitude', longitude)
                    checkedAdd(formData).then()
                    alert('Успешно! Теперь его увидят все!')
                } else {
                    alert('Удалите данные из поля сообщения')
                }
            } else {
                alert('Введите недостающие данные и перезагрузите страницу')
            }
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Проверка объявления</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Эти поля только при подтверждении</h5>
                <Dropdown className="mb-3">
                    <Dropdown.Toggle>{add.selectedArea.value || "Выберите регион города"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {add.areas.map(area =>
                            <Dropdown.Item
                                onClick={() => add.setSelectedArea(area)}
                                key={area.id}
                            >
                                {area.value}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className="mb-3"
                    placeholder="Широта (только при подтверждении)"
                    onChange={e => setLatitude(e.target.value)}
                    value={latitude}
                />
                <Form.Control
                    className="mb-3"
                    placeholder="Долгота (только при подтверждении)"
                    onChange={e => setLongitude(e.target.value)}
                    value={longitude}
                />
                <h5>Все что ниже только при отказе</h5>
                <Form.Control
                    className="mb-3"
                    placeholder="Причина отклонения"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button
                    variant="primary"
                    onClick={confirmAdd}
                >
                    Подтвердить
                </Button>
                <Button
                    variant="danger"
                    onClick={rejectAdd}
                >
                    Отклонить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormSolution;