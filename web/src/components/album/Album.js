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
                        <h3><i class="fas fa-camera"></i> Visit your photo album</h3>
                        <img src={albums[0].pictures[0]}/>
                        </NavLink>
                    </div> 
                    : 
                    <h3><i class="fas fa-camera"></i> {title}</h3>}                 
            </div>          
           
        </div>
       
    )
}

export default Album