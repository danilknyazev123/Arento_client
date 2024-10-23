import {observer} from "mobx-react-lite";
import {InputGroup, Form} from "react-bootstrap";

const PriceBar = observer(() => {

    return (
        <div>
            <h6>Арендная плата за 1 сутки, ₽</h6>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="От"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                />
                <Form.Control
                    placeholder="До"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                />
            </InputGroup>
        </div>
    );
});

export default PriceBar;