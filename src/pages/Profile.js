import React, {useContext, useEffect, useRef} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {fetchUserAdd} from "../http/addApi";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {Context} from "../index";
import AddList from "../components/AddList";
import {CREATE_ADD} from "../utils/consts";
import {useHistory} from "react-router-dom";
import UserProfile from "../components/UserProfile";

const Profile = observer(() => {
    const {add} = useContext(Context)
    const {user} = useContext(Context)

    const {id} = useParams()
    const history = useHistory()

    const windowWidth = useRef(window.innerWidth)

    useEffect(() => {
        if(user.UserData){
            fetchUserAdd(user.UserData.id, id, 1, 100).then(data => {
                add.setAdds(data.rows)
                add.setTotalCount(data.count)
            })
        } else {
            fetchUserAdd(-5, id, 1, 100).then(data => {
                add.setAdds(data.rows)
                add.setTotalCount(data.count)
            })
        }


    }, [add, id]);

    return (
        <Container>
            <Row className="mt-2">
                <Col className="text-left" md={3}>
                    {Number(user.UserData.id) === Number(id) ?
                        <>
                            <h3>Мой профиль</h3>
                        </>
                        :
                        <>
                            <h3>Профиль</h3>
                        </>
                    }
                    <UserProfile/>
                </Col>
                <Col md={9}>
                    {Number(user.UserData.id) === Number(id) ?
                        <div className={windowWidth.current > 576 ?
                            "text-center d-flex justify-content-between align-items-center flex-row"
                            :
                            "text-center d-flex justify-content-between align-items-center flex-column"
                        }>
                            <div>
                                <h3>Мои объявления</h3>
                            </div>
                            <div className="profile_utilities">
                                <Button
                                    className="m-1"
                                    onClick={() => history.push(CREATE_ADD)}
                                >
                                    Создать объявление
                                </Button>
                            </div>
                        </div>
                        :
                        <h3>Объявления пользователя</h3>
                    }
                    <AddList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Profile;