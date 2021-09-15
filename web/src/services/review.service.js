import http from "./base-api-services";

const create = (id, review) => http.post(`/my-travels/events/${id}`, review);
const remove = (id) => http.delete(`/my-travels/events/${id}`);

const service = {
    create,
    remove
}

export default service