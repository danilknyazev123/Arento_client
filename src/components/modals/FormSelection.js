import React, {useState} from 'react';
import {Button, InputGroup, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";
import {sendSelectionMail} from "../../http/addApi";
import {IMaskInput} from "react-imask";
import Error from "./Error";

const FormSelection = observer(({show, onHide}) => {

    const PhoneMask = "+{7} (000) 000-00-00";

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [area, setArea] = useState('')
    const [firstDate, setFirstDate] = useState('')
    const [lastDate, setLastDate] = useState('')
    const [peopleCount, setPeopleCount] = useState('')
    const [roomCount, setRoomCount] = useState('')
    const [budget, setBudget] = useState('')
    const [animalDesc, setAnimalDesc] = useState('')
    const [wishes, setWishes] = useState('')
    const [animal, setAnimal] = useState(false);
    const [inputKey, setInputKey] = useState(0);
    const [errorActive, setErrorActive] = useState(false)
    const [alertText, setAlertText] = useState('')

    const checkHandler = () => {
        setAnimal(!animal)
    }

    const sendForm = () => {
        const form = document.getElementById('selection_form')
        try{
            if (!name){
                form.style.display = 'none'
                setAlertText('Заполните поле с именем')
                setErrorActive(true)
            } else
                if (!phone){
                    form.style.display = 'none'
                    setAlertText('Введите Ваш телефон')
                    setErrorActive(true)
                } else
                    if (!area){
                        form.style.display = 'none'
                        setAlertText('Выберите район города')
                        setErrorActive(true)
                    } else
                        if (!firstDate){
                            form.style.display = 'none'
                            setAlertText('Введите дату заезда')
                            setErrorActive(true)
                        } else
                            if (!lastDate){
                                form.style.display = 'none'
                                setAlertText('Введите дату выезда')
                                setErrorActive(true)
                            } else
                                if (!peopleCount){
                                    form.style.display = 'none'
                                    setAlertText('Введите количество людей')
                                    setErrorActive(true)
                                } else
                                    if (!roomCount){
                                        form.style.display = 'none'
                                        setAlertText('Введите количество комнат')
                                        setErrorActive(true)
                                    } else
                                        if (!budget){
                                            form.style.display = 'none'
                                            setAlertText('Введите цену')
                                            setErrorActive(true)
                                        } else {
                                            const formData = new FormData()
                                            formData.append('name', name)
                                            formData.append('phone', phone)
                                            formData.append('area', area)
                                            formData.append('firstDate', firstDate)
                                            formData.append('lastDate', lastDate)
                                            formData.append('peopleCount', peopleCount)
                                            formData.append('roomCount', roomCount)
                                            formData.append('budget', budget)
                                            formData.append('animal', animal)
                                            formData.append('animalDesc', animalDesc)
                                            formData.append('wishes', wishes)
                                            sendSelectionMail(formData).then()
                                            setInputKey(inputKey + 1);
                                        }
        } catch (e) {
            form.style.display = 'none'
            setAlertText('Непредвиденнная ошибка')
            setErrorActive(true)
        }
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="md"
            centered
            id="selection_form"
            key={inputKey}
        >
            {(inputKey === 1 ?
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Заявка на подбор</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Ваша заявка успешно отправлена! Мы свяжемся с Вами в ближайшее время. Фото вариантов квартир будет отправлено на Ваш WhatsApp.</h5>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={onHide}
                            >
                                Закрыть
                            </Button>
                        </Modal.Footer>
                    </>
                    :
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Заявка на подбор</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Оставьте заявку и мы подберем Вам квартиру совершенно бесплатно!</h5>
                            <Form.Control
                                className="mb-3"
                                placeholder="Ваше имя"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />

                            <div className="form-group mb-3">
                                <IMaskInput
                                    mask={PhoneMask}
                                    value={phone}
                                    placeholder="Ваш телефон(WhatsApp)"
                                    onChange={e => setPhone(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <Form.Control
                                className="mb-3"
                                as="select"
                                onChange={e => setArea(e.target.value)}
                                value={area}
                            >
                                <option>Выберите район</option>
                                <option value="Старый город">Старый город</option>
                                <option value="Колоннада">Колоннада</option>
                                <option value="Декабристов">Декабристов</option>
                                <option value="Вторая линия">Вторая линия</option>
                                <option value="Спальный район">Спальный район</option>
                                <option value="Район рынка">Район рынка</option>
                                <option value="Другой">Другой</option>
                            </Form.Control>
                            <InputGroup className="mb-3 d-flex flex-column">
                                <InputGroup.Text>Дата заезда и выезда</InputGroup.Text>
                                <div className="w-100 d-flex flex-row">
                                    <Form.Control
                                        type="date"
                                        className="noga"
                                        min="2023-01-01"
                                        onChange={e => setFirstDate(e.target.value)}
                                        value={firstDate}
                                    />
                                    <Form.Control
                                        type="date"
                                        className="noga"
                                        min="2023-01-01"
                                        onChange={e => setLastDate(e.target.value)}
                                        value={lastDate}
                                    />
                                </div>
                            </InputGroup>
                            <Form.Control
                                className="mb-3"
                                placeholder="Сколько людей будет проживать"
                                onChange={e => setPeopleCount(e.target.value)}
                                value={peopleCount}
                            />
                            <Form.Control
                                className="mb-3"
                                placeholder="Количество комнат"
                                onChange={e => setRoomCount(e.target.value)}
                                value={roomCount}
                            />
                            <>
                                {['checkbox'].map((type) => (
                                    <div
                                        key={`inline-${type}`}
                                        className="mb-3 pointer-event">
                                        <Form.Check
                                            inline
                                            label="Буду с животным"
                                            name="group50"
                                            type={type}
                                            value="Да"
                                            id={`inline-${type}-50`}
                                            checked={animal}
                                            onChange={checkHandler}
                                        />
                                    </div>
                                ))}
                            </>
                            {animal ?
                                <>
                                    <Form.Control
                                        className="mb-3"
                                        placeholder="Опишите Ваше животное"
                                        onChange={e => setAnimalDesc(e.target.value)}
                                        value={animalDesc}
                                    />
                                </>
                                :
                                <></>
                            }
                            <Form.Control
                                className="mb-3"
                                placeholder="Бюджет (за сутки)"
                                onChange={e => setBudget(e.target.value)}
                                value={budget}
                            />
                            <Form.Control
                                className="mb-3"
                                placeholder="Пожелания"
                                onChange={e => setWishes(e.target.value)}
                                value={wishes}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={onHide}
                            >
                                Закрыть
                            </Button>
                            <Button
                                variant="primary"
                                onClick={sendForm}
                            >
                                Отправить заявку
                            </Button>
                        </Modal.Footer>
                    </>
            )}
            <Error mother={'1'} alert={alertText} show={errorActive} onHide={() => setErrorActive(false)}/>
        </Modal>
    );
});

export default FormSelection;