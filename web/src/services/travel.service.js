import http from "./base-api-services";

const list = () => http.get('/travels');
const listmine = () => http.get('/my-travels');
const detail = (id) => http.get(`/my-travels/${id}`);
const create = (travel) => {
    const data = new FormData;
    Object.keys(travel).forEach(key => data.append(key, travel[key]))
    return http.post('/my-travels', data)
};
const edit = (id, travel) => {
    const data = new FormData;
    Object.keys(travel).forEach(key => data.append(key, travel[key]))
    return http.patch(`/my-travels/${id}`, data)
};
const remove = (id) => http.delete(`/my-travels/${id}`)

const service = {
    list,
    listmine,
    detail,
    create,
    edit,
    remove
}

export default service
