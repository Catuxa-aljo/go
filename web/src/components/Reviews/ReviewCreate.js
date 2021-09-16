
import { useEffect, useState } from 'react'
import reviewService from '../../services/review.service'
import {useParams} from 'react-router-dom'
import Rating from 'react-rating'

function ReviewCreate() {

    const { id } = useParams()

    const [review, setReview] = useState({

        comments:"",
        stars: 0
        
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setReview({
            ...review,
            [name] : value
        })
    }

    function handleSubmit (event) {    

        event.preventDefault()
        reviewService.create(id, review)
            .then(review => {} )
            .catch(error  => {
                const { errors, message} = error.response?.data || error;
                const touched =  Object.keys(errors || {}).reduce((touched, key) => {
                    touched[key] = true;
                    return touched;
                }, {});           
            })
    }

    return(
        <div>
                
                <form onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-compass"></i></span>
                    <input  name="comments" 
                            type="text" 
                            className="form-control"
                            value={review.comments} 
                            onChange={handleChange}
                            placeholder="Travel name" 
                            aria-label="Name" 
                            aria-describedby="Add Travel name"/>
                </div>
                <div>
                <h3>Rating (quality)</h3>
                <input name="stars" as={Rating} />
                </div>
                
                <button type="submit"> Create a new travel </button>
                </form>

        </div>
    )
}

export default ReviewCreate