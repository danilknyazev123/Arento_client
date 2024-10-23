import React from 'react';
import AddCreateForm from "../components/AddCreateForm"
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const CreateAdd = observer(() => {

    return (
        <Container>
            <AddCreateForm/>
        </Container>
    );
});

export default CreateAdd;

