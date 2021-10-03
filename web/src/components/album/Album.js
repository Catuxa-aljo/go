import AlbumCreate from "./AlbumCreate"
import { NavLink } from 'react-router-dom'

function Album({albums, title}) {
    return(
        <div className="photo">
            <div className="photoalbum">
            {albums.length > 0 
                    ? 
                    <div>                        
                        <NavLink exact to={`/my-travels/album/${albums[0].id}`}> 
                        <h2><i class="fas fa-camera"></i> Visit your photo album</h2>
                        <img src={albums[0].pictures[0]}/>
                        </NavLink>
                    </div> 
                    : 
                    <h3><i class="fas fa-camera"></i> {title}</h3>}                 
            </div>          
           {albums.length === 0 && <AlbumCreate />}
        </div>
       
    )
}

export default Album