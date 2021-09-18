import http from '../services/base-api-services'

const create = (id, album) =>{ 
    const data = new FormData;
    Object.keys(album).forEach(key=> data.append(key, album[key]))
    return http.post(`/my-travels/${id}/album`, data)
}

const service = {
    create
}

export default service