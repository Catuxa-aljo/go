import http from "./base-api-services";

const detail = (id) => http.get(`/my-travels/events/${id}`)
const create = (event, id) => http.post(`/my-travels/${id}`, event)

const service = {
    detail,
    create
}
export default service