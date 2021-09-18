
import albumService from '../../services/album.services'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function AlbumList() {

    const { id } = useParams()
    const [album, setAlbum] = useState({})

    useEffect(() => {
        albumService.list(id)
            .then(alb => setAlbum(alb))
            .catch(error => console.error(error))
    }, [])

    return(
        <div>
            {album.map(picture => <div><img src={picture} /></div>)}
        </div>

    )
}

export default AlbumList