import http from "./base-api-services";

const create = (user) => http.post('/', user);
const detail = (id) => http.get(`/user/${id}`);
const profile = () => http.get('/me');
const edit = (user) => {
    console.info(user)
    const data = new FormData ();
    Object.keys(user).forEach(key => data.append(key, user[key]))
    return  http.patch('/me', data)
};
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