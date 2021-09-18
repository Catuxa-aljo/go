
import albumService from '../../services/album.services'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function AlbumList() {

    const { id } = useParams()
    const [album, setAlbum] = useState({})
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        albumService.list(id)
            .then(alb =>
               {
                setAlbum(alb);
                setIsLoading(false)})
            .catch(error => console.error(error))
    }, [])

    return(
        <>
        {!loading && 
            <div className="container">
            <h1>{album.title}</h1>

<div class="row">

            {album.pictures.map(picture =>  
        
        <div class="card col-sm" >
<img src={picture} alt={album.title}/> 
</div>
            
                )}
</div>
</div>


      


        }
        {loading && 
            <div className="loading">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
    </>

    )
}

export default AlbumList