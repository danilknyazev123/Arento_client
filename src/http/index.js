import axios from "axios";

const $host = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers' : '*',
    },
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers' : '*',
    },
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers.append('Content-Type', 'application/json');
    config.headers.append('Accept', 'application/json');

    config.headers.append('Access-Control-Allow-Origin', 'http://89.108.109.209:9090');
    config.headers.append('Access-Control-Allow-Credentials', 'true');

    config.headers.append('GET', 'POST', 'OPTIONS');
    return config
}
$authHost.interceptors.request.use(authInterceptor)

$authHost.interceptors.request.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config
    if (error.config.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}api/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $authHost.request(originalRequest)
        } catch (e) {

        }
    }
    throw error
})

export {
    $host,
    $authHost
}
