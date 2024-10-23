import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import axios from "axios";
export const registration = async (email, nickname, password) => {
    try {
        const response = await $host.post('api/user/registration', {email, nickname, password})
        localStorage.setItem('token', response.data.accessToken)
        return jwt_decode(response.data.accessToken)
    } catch (e) {
        alert(e.response?.data?.message);
    }
}
export const login = async (email, password) => {
    try  {
        const response = await $host.post('api/user/login', {email, password})
        localStorage.setItem('token', response.data.accessToken)
        return jwt_decode(response.data.accessToken)
    } catch (e) {
        alert(e.response?.data?.message);
    }
}
export const check = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}api/user/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken);
        return jwt_decode(response.data.accessToken)
    } catch (e) {

    }
}
export const logout = async () => {
    return await $authHost.post('api/user/logout')
}