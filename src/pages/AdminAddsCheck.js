import React, {useContext, useEffect} from 'react';
import {fetchDontCheckedAdd} from "../http/addApi";
import Pages from "../components/Pages";
import AddList from "../components/AddList";
import {Context} from "../index";
import {Container} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {Redirect} from "react-router-dom";

const AdminAddsCheck = () => {
    const {user} = useContext(Context)
    const {add} = useContext(Context)

    useEffect(() => {
        fetchDontCheckedAdd(add.page, add.limit).then(data => {
            add.setAdds(data.rows)
            add.setTotalCount(data.count)
        })
    }, [add, add.page]);

    return (
        <>
            {user.UserData.role === "ADMIN" ?
                <Container>
                    <AddList/>
                    <Pages/>
                </Container>
                :
                <Redirect to={SHOP_ROUTE}></Redirect>
            }
        </>
    );
};

export default AdminAddsCheck;