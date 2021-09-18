import { useState } from 'react';
import albumService from '../../services/album.services'
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';

function AlbumCreate() {

    const { id } = useParams()

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
            .then(album)
            .catch(error => console.error(error))
    }
  
    return (
        <form onSubmit={handleSubmit}>        
        <div>
            <h3>Create your photo album</h3>
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
        <button type="submit"> Create a new travel </button>
    </form>
    );
  }

export default AlbumCreate