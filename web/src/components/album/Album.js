import AlbumCreate from "./AlbumCreate"
import { NavLink } from 'react-router-dom'

function Album({albums, title}) {
    return(
        <div className="photo">
            <div className="photoalbum">
                <i class="fas fa-camera"></i>
                <h3>{title}</h3>
            </div>
            {console.log(albums)}           
           {albums.length === 0 ? <AlbumCreate /> : <div><NavLink exact to={`/my-travels/album/${albums[0].id}`} >Visit your photo album</NavLink></div>}
        </div>
       
    )
}

export default Album