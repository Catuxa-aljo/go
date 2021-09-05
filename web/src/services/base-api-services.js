import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
    withCredentials: true
})

http.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    const status = error?.response?.status;
    switch (status) {
        case 400: 
        if (status === 401 || status ===403 && window.location.pathname !== "/signup" && window.location.pathname !== "/login") {
            window.location.replace('/login')
        } else {
            window.location.replace('/404')
        }
        break;
        default:
        break;
    }
    return Promise.reject(error)
});
export default http;