import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Navigation from "./components/Navigation";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import Loading from "./components/helpers/Loading";
import Footer from "./components/Footer";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('token')){
            check().then(data => {
                if(data){
                    user.setIsAuth(true)
                    user.setUserData(data)
                }
            }).finally(() => setLoading(false))
        } else {
            user.setIsAuth(false)
            setLoading(false)
        }
    }, [user])

    if (loading) {
        return (
            <Loading/>
        )
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <Navigation/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
});

export default App;