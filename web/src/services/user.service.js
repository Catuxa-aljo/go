import http from "./base-api-services";

const create = (user) => http.post('/register', user);
const detail = (id) => http.get(`/user/${id}`);
const profile = () => http.get('/me');
const edit = (user) => http.patch('/me', user);
const login = (email, password) => http.post('/login', {email, password});
const logout = () => http.post('/logout')

const service = {
    create,
    detail,
    edit,
    login,
    logout,
    profile
}

export default service