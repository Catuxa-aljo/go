import AlbumCreate from "./AlbumCreate"

function Album({albums}) {
    return(
        <div>
           {/* //<div><img src={albums[0].pictures[0]} /></div> */}
            <AlbumCreate />
        </div>
       
    )
}

export default Album