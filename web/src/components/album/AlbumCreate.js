import { useState } from 'react';
import albumService from '../../services/album.services'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function AlbumCreate() {

    const { id } = useParams()
    const history = useHistory()

    const [album, setAlbum] = useState({
        title:'',
        pictures:[]
    })

    function handleChange (event) {
        let { name, value, files } = event.target;

        if ( files ) {
            value = files
        }

        setAlbum({
            ...album,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.info(id)
        albumService.create(id, album)
            .then(album => history.push(`/my-travels/album/${album.id}`) )
            .catch(error => console.error(error))
    }
  
    return (
        <form onSubmit={handleSubmit}>        
        <div>
            <h3>Create your photo album</h3>
            <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-compass"></i></span>
                    <input  name="title" 
                            type="text" 
                            className="form-control"
                            value={album.title} 
                            onChange={handleChange}
                            placeholder="Album title" 
                            aria-label="Name" 
                            aria-describedby="Add Album title"/>
                </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="far fa-image"></i></span>
                <input  name="pictures" 
                        type="file" 
                        onChange={handleChange}
                        multiple
                        className="form-control" 
                        placeholder="Add a cover for your travel" 
                        aria-label="Cover" 
                        aria-describedby="Add a cover for your travel"/>
            </div>
        </div>
        <button type="submit"> Create an album </button>
    </form>
    );
  }

export default AlbumCreate