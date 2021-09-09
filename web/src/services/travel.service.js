import http from "./base-api-services";

const list = () => http.get('/travels');
const listmine = () => http.get('/my-travels');
const detail = (id) => http.get(`/my-travels/${id}`);
const create = (travel) => http.post('/my-travels', travel);
const edit = (id, travel) => http.patch(`/my-travels/${id}`, travel);
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
