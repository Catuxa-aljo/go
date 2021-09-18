import http from '../services/base-api-services'

const create = (id, album) => { 
    const data = new FormData;
    for (let i = 0; i < album.pictures.length; i++) {
        data.append('pictures', album.pictures[i])
    }
    data.append('title', album.title)
    return http.post(`/my-travels/${id}/album`, data)
}

const list = (id) => http.get(`http://localhost:3001/api/my-travels/album/${id}`)

const service = {
    create,
    list
}

export default service