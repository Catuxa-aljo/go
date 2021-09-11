import http from "./base-api-services";

const detail = (id) => http.get(`/my-travels/events/${id}`);
const create = (id, event) => http.post(`/my-travels/${id}`, event);
const remove = (id) => http.delete(`/my-travels/events/${id}`)
const edit = (id, event) => http.patch(`/my-travels/events/${id}`, event)

const service = {
    detail,
    create,
    remove,
    edit
}
export default service