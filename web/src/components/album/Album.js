import AlbumCreate from "./AlbumCreate"

function Album({albums}) {
    return(
        <div>
           {albums.id}
            <AlbumCreate />
        </div>
       
    )
}

export default Album